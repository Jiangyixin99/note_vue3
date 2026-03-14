

// request.js
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建 axios 实例并设置基础 URL 和超时时间
const request = axios.create({
    baseURL: '/api',
    // baseURL: 'http://localhost:7071',
    // 你的后端服务地址

    timeout: 30000 // 请求超时时间设置为30秒
});

// 请求拦截器
// 请求拦截器，设置请求头和处理请求错误
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
}, error => {
    return Promise.reject(error)
});

// 响应拦截器
// 响应拦截器，处理响应数据和响应错误
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 将字符串响应转换为JSON对象
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res;
        }
        return res;
    },
    error => {
        // 这里可以处理请求失败的逻辑，例如显示错误信息等
        if (error.response.status === 404) {
            ElMessage.error('未找到请求接口')
        } else if (error.response.status === 500) {
            ElMessage.error('系统异常,请查看后端控制台报错')
        } else {
            console.error(error.message)
        }
        return Promise.reject(error)
    });

// 导出 request 实例供其他模块使用
// 这里不能用括号包住
export default request

