import { HttpRequestService } from '@/contracts/interfaces/HttpRequestService'
import { AxiosService } from '@/services/Axios/AxiosService'
export class Auth {
  private prefix: string
  constructor (private httpRequestService: HttpRequestService = new AxiosService()) {
    this.prefix = 'auth'
  }

  login (data: any): any {
    return this.httpRequestService.post('auth/login', data, null)
  }

  logout (): any {
    return this.httpRequestService.delete('auth/logout/', null)
  }
}
