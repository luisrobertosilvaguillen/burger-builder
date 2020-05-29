import axios from 'axios';

const instance = axios.create({
    baseURL: '[YOUR_API_ENDPINT_HERE]'
})

export default instance;