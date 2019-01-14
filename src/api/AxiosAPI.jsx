import axios from 'axios';

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/';

var axiosAPI = axios.create({
  baseURL: BASE_URL
});

module.exports = axiosAPI;
