import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ElNotification } from 'element-plus'

// 错误码
const codeMessage: Record<number, string> = {
  400: '请求处理异常',
  401: '登录已过期，将为您重新登录',
  403: '访问被禁止。',
  404: '发出的请求是不存在的记录',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '验证错误',
  500: '服务器发生错误',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  20032: '该功能暂未对您开放',
  10025: '用户不存在',
};

// 创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as any,

  timeout: 15000,
});
const { CancelToken } = axios;
const source = CancelToken.source();

// 添加请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {

    const headers = {
      Authorization: youngDanStorage.get('TOKEN') ? youngDanStorage.get('TOKEN') : '',
      'Content-Type': 'application/json',
    };
    if (config.headers) {
      config.headers = { ...headers, ...config.headers } as any;
    } else {
      config.headers = headers as any;
    }

    config.cancelToken = source.token;

    return config;
  },
  (error: AxiosError) => Promise.resolve(error || '服务器异常'),
);

// 添加响应拦截器
instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { code, msg } = response.data;
    if (code !== 0) {
      if (code) {
        const errorText = codeMessage[code] || msg;
        ElNotification({
          title: '错误',
          message: errorText,
          type: 'error',
        })

        if (code === 401) {
          // 登录过期的逻辑
        }

        return Promise.reject(new Error(msg || 'Error'));
      }
      // code不存在
      return response;
    } else {
      // 文件流导出
      let str = response.headers['content-disposition'];
      let isImport = response.config.responseType === 'blob';  //导入也返回 根据blob判断的
      if ((str && str.includes('attachment')) || isImport) return response.data
      return response.data;
    }
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response && response.status) {
      const { status, statusText } = response;
      const errorText = codeMessage[status] || statusText;
      ElNotification({
        title: '错误',
        message: errorText,
        type: 'error',
      })
    } else if (!response) {
      ElNotification({
        title: '错误',
        message: '您的网络发生异常，无法连接服务器',
        type: 'error',
      })
    }
    return Promise.reject(error);
  },
);

export default instance;
