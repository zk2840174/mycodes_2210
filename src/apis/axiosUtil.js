import axios from "axios";

const axioUtil = (function() {

    const axiosApiInstance = axios.create();

    axiosApiInstance.interceptors.request.use(
        async config => {
            const value = localStorage.getItem("login")
            const keys = JSON.parse(value)
            config.headers = {
                'Authorization': `Bearer ${keys.accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });


    axiosApiInstance.interceptors.response.use((response) => {
            return response
        },
        async function (error) {
            const originalRequest = error.config;
            if (error.response.status === 403 && !originalRequest._retry) {
                console.log('403 error')
                originalRequest._retry = true;
                const newTokens = await refreshAccessToken();
                //axios.defaults.headers.common['Authorization'] = `Bearer ${newTokens.accessToken}`;

                localStorage.setItem("login",JSON.stringify(newTokens))

                return axiosApiInstance(originalRequest);
            }
            return Promise.reject(error);
        });

    const refreshAccessToken = async () => {


        const {accessToken, refreshToken} = JSON.parse(localStorage.getItem("login"))
        const urlEncodedHeader = {"Content-Type": `application/x-www-form-urlencoded`}
        const params = new URLSearchParams()
        params.append('refreshToken', refreshToken)

        const headers = {
            'Authorization': `${accessToken}`,
            'Content-Type': `application/x-www-form-urlencoded`
        }

        const res = await axiosApiInstance.post(`http://localhost/refreshTokens`, params, {headers})

        return res.data

    }

    return axiosApiInstance
})()

export default axioUtil