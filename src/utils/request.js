// 基于axios封装的模块
import axios from 'axios'

// 创建一个axios实例
// 通过这个实例去发送请求
const request = axios.create({
        baseURL: 'http://127.0.0.1:8080' //配置的基础路径
    })
    //导出请求方法
export default request