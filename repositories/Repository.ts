import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/repositories/PostRepository'
export default ($axios:NuxtAxiosInstance) => ({
  post: PostRepository($axios)
})
