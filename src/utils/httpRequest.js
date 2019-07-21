import Vue from 'vue'
import axios from 'axios'
import router from "../router";

const http = axios.create({
  baseURL: '//127.0.0.1:9001',
  timeout: 1000 * 30,
  withCredentials: true, // 当前请求为跨域类型时是否在请求中协带cookie
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  // 处理请求之前的配置
  config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  return config
}, error => {
  // 请求失败的处理
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data && response.data.code === 403) { // 403 token失效
    Vue.cookie.delete('token');
    router.push({name: 'login'})
  }
  return response
}, error => {
  return Promise.reject(error)
})

/**
 * 请求地址处理
 */
http.adornUrl = (actionName) => {
  return actionName
}

export default http
