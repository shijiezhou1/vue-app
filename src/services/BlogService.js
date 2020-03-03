import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getPosts(perPage, page) {
    return apiClient.get('/blogs?_limit=' + perPage + '&_page=' + page)
  },
  getPost(id) {
    return apiClient.get('/blogs/' + id)
  },
  postPost(blog) {
    return apiClient.post('/blogs', blog)
  }
}
