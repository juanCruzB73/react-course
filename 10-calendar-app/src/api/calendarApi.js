import axios from 'axios';
import { getEnvVarialbles } from '../helpers';

const {VITE_API_URL}=getEnvVarialbles()


const calendarApi=axios.create({
    baseURL:VITE_API_URL
});

//interceptors
calendarApi.interceptors.request.use(config=>{
    config.headers={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})

export default calendarApi