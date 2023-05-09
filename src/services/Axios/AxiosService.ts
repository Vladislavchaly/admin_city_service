import { HttpRequestService } from '@/contracts/interfaces/services/HttpRequestService'
import axios, { AxiosInstance } from 'axios'
import { requestInterceptor } from '@/interceptors/http/axios/request.function'
import { responseInterceptor } from '@/interceptors/http/axios/response.function'
import { injectable } from 'inversify'
@injectable()
export class AxiosService implements HttpRequestService {
  private axios: AxiosInstance
  constructor () {
    this.axios = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL
    })
    this.axios.interceptors.request.use(requestInterceptor)
    this.axios.interceptors.response.use(responseInterceptor)
  }

  post (path: string, data: any, options: any = null): any {
    return this.axios.post(path, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }

  put (path: string, data: any, options: any = null): any {
    return this.axios.put(path, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }

  get (path: string, data: any, options: any = null): any {
    return this.axios.get(path, {
      params: data
    }).then(response => {
      return response.data
    })
      .catch(error => {
        throw error
      })
  }

  delete (path: string, options: any = null): any {
    return this.axios.delete(path)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }
}
