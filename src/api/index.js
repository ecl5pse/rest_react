import axios from 'axios';


const baseUrl ="http://192.168.0.106:3000/api/ ";

axios.interceptors.request.use(function(config) {
  config.headers.authorization = '6';

  return config;
});

/**
 * @param {object}data
 * @return {Promise<AxiosResponse<T>>}
 */
export  async function postTask(data) {

  return axios.post(`${baseUrl}task`, data );

}

/**
 *
 * @return {Promise<AxiosResponse<T>>}
 */
export  async function  getUserTasks() {
  return axios.get(`${baseUrl}tasks`);

}

/**
 *
 * @param id
 * @param data
 * @return {Promise<void>}
 */
export async function  updateTaskByID(id,data) {
 return axios.put(`${baseUrl}task/id`);
}