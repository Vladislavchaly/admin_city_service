import { HttpRequestService } from '@/contracts/interfaces/HttpRequestService'
import axios from 'axios'

export class AxiosService implements HttpRequestService {
  private baseUrl: string
  constructor () {
    this.baseUrl = process.env.VUE_APP_API_BASE_URL
  }

  post (path: string, data: any, options: any = null): any {
    return axios.post(`${this.baseUrl}${path}`, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }

  put (path: string, data: any, options: any = null): any {
    return axios.put(`${this.baseUrl}${path}`, data)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }

  get (path: string, data: any, options: any = null): any {
    return axios.get(`${this.baseUrl}${path}`, {
      params: data
    }).then(response => {
      return response.data
    })
      .catch(error => {
        throw error
      })
  }

  delete (path: string, options: any = null): any {
    return axios.delete(`${this.baseUrl}${path}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        throw error
      })
  }
}
