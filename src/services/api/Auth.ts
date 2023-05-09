import 'reflect-metadata'
import { HttpRequestService } from '@/contracts/interfaces/HttpRequestService'
import AuthService from '@/contracts/interfaces/AuthService'
import { inject, injectable } from 'inversify'
import { th } from 'vuetify/locale'

@injectable()
export class Auth implements AuthService {
  private prefix: string
  private httpRequestService: HttpRequestService
  private authUser: any
  constructor (@inject('HttpRequestService') httpRequestService: HttpRequestService) {
    this.prefix = 'auth'
    this.httpRequestService = httpRequestService
  }

  login (data: any): any {
    return this.httpRequestService.post('auth/login', data, null)
  }

  logout (): any {
    return this.httpRequestService.delete('auth/logout/', null)
  }

  async checkToken (token: string): Promise<boolean> {
    return !!(await this.getAuthUser())
  }

  async getAuthUser () {
    if (this.authUser) {
      return this.authUser
    }
    this.authUser = this.httpRequestService.get('users/me', null, null)
    return this.authUser
  }
}
