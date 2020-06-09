import axios from 'axios';

const get = async (url, config={}) => {
  return await axios.get(process.env.VUE_APP_API + url, config)
}

const post = async (url, config={}) => {
  return await axios.post(process.env.VUE_APP_API + url, config)
}

export {
  get,
  post
}
