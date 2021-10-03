import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/data/repositories/post-repository'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor (axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  post = () => new PostRepository(this.axios)
  users = () => new PostRepository(this.axios)
}
