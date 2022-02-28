import { message as $message } from "ant-design-vue";
import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY } from "@/enums/cacheEnum";
import { Storage } from "@/utils/Storage";
import { RequestOptions } from "@/interface/requestOptionsInterface";
import { baseApiUrl, baseMockUrl } from "@/config/default.setting";
// import { useUserStore } from "@/store/modules/user";
// import { ExclamationCircleOutlined } from "@ant-design/icons";
console.log(ACCESS_TOKEN_KEY);

const UNKNOWN_ERROR = "未知错误，请重试";

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

// 创建 axios 实例
// baseURL: process.env.VUE_APP_API_BASE_URL,
const service = axios.create({
  baseURL: baseApiUrl,
  timeout: 6000,
});

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    const token = Storage.get(ACCESS_TOKEN_KEY);
    if (error.response.status === 403) {
      // notification.error({
      //   message: "Forbidden",
      //   description: data.message,
      // });
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      // notification.error({
      //   message: "Unauthorized",
      //   description: "Authorization verification failed",
      // });
      if (token) {
        // store.dispatch("Logout").then(() => {
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 1500);
        // });
      }
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  const token = Storage.get(ACCESS_TOKEN_KEY);
  if (token && config.headers) {
    // 请求头token信息，请根据实际情况进行修改
    config.headers["Authorization"] = token;
    config.headers["Access-Token"] = token;
  }
  return config;
}, errorHandler);

// response interceptor
service.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);
// (error) => {
//   Promise.reject(error);
// }
// service.interceptors.response.use(
//   (response) => {
//     const res = response.data;

//     // if the custom code is not 200, it is judged as an error.
//     if (res.code !== 200) {
//       $message.error(res.message || UNKNOWN_ERROR);

//       // Illegal token
//       if (res.code === 11001 || res.code === 11002) {
//         window.localStorage.clear();
//         window.location.reload();
//         // to re-login
//         Modal.confirm({
//           title: "警告",
//           content:
//             res.message || "账号异常，您可以取消停留在该页上，或重新登录",
//           okText: "重新登录",
//           cancelText: "取消",
//           onOk: () => {
//             localStorage.clear();
//             window.location.reload();
//           },
//         });
//       }

//       // throw other
//       const error = new Error(res.message || UNKNOWN_ERROR) as Error & {
//         code: any;
//       };
//       error.code = res.code;
//       return Promise.reject(error);
//     } else {
//       return res;
//     }
//   },
//   (error) => {
//     // 处理 422 或者 500 的错误异常提示
//     const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
//     $message.error(errMsg);
//     error.message = errMsg;
//     return Promise.reject(error);
//   }
// );

export type Response<T = any> = {
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {}
): Promise<T> => {
  try {
    const {
      successMsg,
      errorMsg,
      permCode,
      isMock,
      isGetDataDirectly = true,
    } = options;
    console.log(permCode);
    // 如果当前是需要鉴权的接口 并且没有权限的话 则终止请求发起
    // if (permCode && !useUserStore().perms.includes(permCode)) {
    //   return $message.error("你没有访问该接口的权限，请联系管理员！");
    // }
    const fullUrl = `${(isMock ? baseMockUrl : baseApiUrl) + config.url}`;
    config.url = fullUrl.replace(/(?<!:)\/{2,}/g, "/");
    // if (IS_PROD) {
    //   // 保持api请求的协议与当前访问的站点协议一致
    //   config.url.replace(/^https?:/g, location.protocol);
    // }
    const res = await service.request(config);
    successMsg && $message.success(successMsg);
    errorMsg && $message.error(errorMsg);
    return isGetDataDirectly ? res.data : res;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
