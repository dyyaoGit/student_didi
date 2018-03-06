import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://didi.yaojunrong.com/api/',
  timeout: 5000
});

export default instance;
