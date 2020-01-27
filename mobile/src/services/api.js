import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.20.240:3333',
});

export default api;