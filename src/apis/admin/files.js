import { createApi } from "element-plus-admin/utils/create-api";
import { useAuth } from "@/composables/use-auth";

export const filesApi = createApi({
  url: "/admin/files",
  headers: useAuth().getHeaders(),
});
