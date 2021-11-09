const axios = require('axios');

export async function request200(): Promise<any> {
  return axios.get('https://httpbin.org/status/200');
}

export async function request400(): Promise<any> {
  return axios.get('https://httpbin.org/status/400');
}
