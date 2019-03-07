import axios from 'axios'

// var baseUrl = '';
var baseUrl = 'http://localhost:3000';
// 创建axios实例
let http = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

// 添加请求拦截器
http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 添加一个响应拦截器
http.interceptors.response.use(response => {
    let { data } = response
    return data
}, error => {
    return Promise.reject(error)
})

// http.post(`url`, params).then(res => res.data);
//通用方法
export const POST = (url, params) => {
    return axios.post(`${baseUrl}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
    return axios.get(`${baseUrl}${url}`, {
        params: params
    }).then(res => res.data)
}

export const PUT = (url, params) => {
    return axios.put(`${baseUrl}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
    return axios.delete(`${baseUrl}${url}`, {
        params: params
    }).then(res => res.data)
}

export const PATCH = (url, params) => {
    return axios.patch(`${base}${url}`, params).then(res => res.data)
}

// export default http