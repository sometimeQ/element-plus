import { filesApi } from "@/apis/admin/files";
import * as Oss from "ali-oss";
import {UploadTo} from "../../../enums/upload-to";

export const useCos = ({ api, uploadTo, region, bucket, onProgress }) => {
  let client = null;

  const initialize = async () => {
    const {
      Credentials: { AccessKeyId, AccessKeySecret, SecurityToken },
    } = await api.post({
      action: "getStsCredential",
      body: { region, bucket },
    });

    switch (uploadTo===UploadTo.AliCloud){
      
    }

    client = new Oss({
      region,
      bucket,
      accessKeyId: AccessKeyId,
      accessKeySecret: AccessKeySecret,
      stsToken: SecurityToken,
    });
  };

  const upload = async (file, fileDir) => {
    const { name, type, size } = file;
    const ext = name.split(".").pop();

    const { id, date, uuid } = await filesApi.post({
      action: "create",
      body: { dir: fileDir },
    });

    await client.multipartUpload(
      `${fileDir ? fileDir + "/" : ""}${date}/${uuid}.${ext}`,
      file,
      {
        progress(p) {
          onProgress && onProgress(+(p * 100).toFixed(0));
        },
        parallel: 4,
        partSize: 1024 * 1024,
        meta: { year: 2020, people: "test" },
        mime: "text/plain",
      }
    );

    onProgress && onProgress(0);

    await filesApi.post({
      action: "update",
      body: { date, uuid, name, type, ext, size },
    });

    return { id };
  };

  return {
    client,
    initialize,
    upload,
  };
};
