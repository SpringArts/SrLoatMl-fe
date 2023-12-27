import Axios from "axios";

const apiConfig = {
    baseUrl: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
}

const axios = Axios.create(apiConfig)

export default axios
