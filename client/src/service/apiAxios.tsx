import axios from "axios"
axios.defaults.withCredentials = true

const axiosInstancia = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },

})

export default axiosInstancia