import $qs from 'qs';
import axios from 'axios'; // 引用axios
import { getToken } from './cookie';

console.log(process.env);
// create an axios instance
const $axios = axios.create({
  baseURL: process.env.BASE_URL, // 所有异步请求都加上/api,nginx转发到后端Springboot
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
$axios.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // config.headers['-Token'] = getToken()
    config.headers.Accept = '*/*';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    config.method === 'post'
      ? config.data = $qs.stringify({ ...config.data })
      : config.params = { ...config.data };
    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
$axios.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data; // res is my own data

    if (res.code === 200) {
      // do somethings when response success
      return res;
    } else {
      // if the custom code is not 200000, it is judged as an error.
      return Promise.reject(new Error(res.msg || 'Error'));
    }
  },
  (error) => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default $axios; // 导出封装后的axios
