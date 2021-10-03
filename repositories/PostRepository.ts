import { NuxtAxiosInstance } from '@nuxtjs/axios'
const resource = ''
export default ($axios:NuxtAxiosInstance) => ({
  all () {
    return $axios.get(`${resource}`)
  },
  show (id:Number) {
    return $axios.get(`${resource}/${id}`)
  },

  create (payload:Object) {
    return $axios.post(`${resource}`, payload)
  },

  update (id:Number, payload:Object) {
    return $axios.post(`${resource}/${id}`, payload)
  },

  delete (id:Number) {
    return $axios.delete(`${resource}/${id}`)
  }
})
