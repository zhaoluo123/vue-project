import axios from 'axios'

export const base_url = process.env.VUE_APP_BASE_URL;
console.log(base_url);
export const base = 'http://iot-center.gateway.k8s.pactera.top/elink/adminserver';


const header = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};

//登陆
export const userLogin = (params,lang )=> {
    return axios.post(`${base}/login/login?lang=`+lang+`&time=` + new Date().getTime(), params, header)
};