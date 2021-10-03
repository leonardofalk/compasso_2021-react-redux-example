import axios from 'axios'

export class ApiService {
  http = null

  constructor() {
    this.http = axios.create({
      baseURL: 'https://compasso-blog-api.herokuapp.com',
      headers: {
        Authorization: 'Bearer 987654321',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  getPostsByCategory(category = '') {
    return this.getBodyResponse(() => this.http.get(`${category.toLowerCase()}/posts`))
  }

  getPostById(id) {
    return this.getBodyResponse(() => this.http.get(`/posts/${id}`))
  }

  // private

  async getBodyResponse(promise) {
    const response = await promise()

    return response.data
  }
}
