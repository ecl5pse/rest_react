import axios from 'axios';

export const baseUrl = 'http://192.168.0.106:3000/api/';

axios.interceptors.response.use(
    axiosResponse => axiosResponse,

    async error => {

      switch (error.response.status) {
        case 401: {
          const {data} = await axios.post(`${baseUrl}/refresh}`);
          const {config} = error;
          config.headers.authorization = data;
          return axios.request(config);
        }
        default: {
          return error;
        }
      }

    },
);