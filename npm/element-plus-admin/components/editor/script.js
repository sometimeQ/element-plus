import { onMounted, ref } from "vue";
import WangEditor from "wangeditor";
import { useConsts } from "@/composables/use-consts";
import { useAuth } from "element-plus-admin/composables/use-auth";
import { sleep } from "jt-helpers";
import { aliCloudOss } from "../upload/utils/alicloud-oss";

const { ApiUrl } = useConsts();
const { getRequestHeaders } = useAuth();

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    menus: {
      type: Array,
      default: () => null,
    },
    style: {
      type: String,
      default: "height: 500px",
    },
    uploadHeaders: {
      type: Object,
      default: () => getRequestHeaders(),
    },
    uploadAction: {
      type: String,
      default: `${ApiUrl}/admin/files/actions/upload`,
    },
    uploadTo: {
      type: String,
      default: "Server",
    },
    aliCloudOssConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:value", "change"],
  setup(props, context) {
    let editor = null;

    const editorToolbar = ref(null);
    const editorInput = ref(null);

    onMounted(async () => {
      editor = new WangEditor(editorToolbar.value, editorInput.value);

      editor.config.menus = props.menus || [
        "head",
        "bold",
        "fontSize",
        "italic",
        "underline",
        "strikeThrough",
        "foreColor",
        "backColor",
        "link",
        "list",
        "justify",
        "quote",
        "image",
        "table",
      ];

      editor.config.zIndex = 0;

      editor.config.uploadFileName = "file";

      editor.create();

      editor.txt.html(props.value);

      // 不监听第一次 onchange 事件
      await sleep(1000);

      editor.config.onchange = (html) => {
        context.emit("update:value", html);
        context.emit("change", html);
      };
    });

    return {
      editorToolbar,
      editorInput,
    };
  },
};
