import axios from 'axios'
export function request(config) {
  //1.创建axios对象
  const axios_instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.拦截器
  //2.1请求拦截器
  axios_instance.interceptors.request.use(
    config=>{
      return config
    },
    error => {
      console.log(error);
    }
  )
  //2.2响应拦截器
  axios_instance.interceptors.response.use(
    res=>{
      return res.data
    },
    error => {
      console.log(error);
    }
  )
  //3.发送请求
  return  axios_instance(config)
}
