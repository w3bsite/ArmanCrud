import Repository from '~/data/repositories/repository'

export default class PostRepository extends Repository {
  all () {
    return this.axios.get(``)
  }

  storeToken () {
    localStorage.setItem('', '')
  }
}
