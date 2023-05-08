import 'reflect-metadata'
import { HttpRequestService } from '@/contracts/interfaces/HttpRequestService'
import AuthService from '@/contracts/interfaces/AuthService'
import { inject, injectable } from 'inversify'

@injectable()
export class Auth implements AuthService {
  private prefix: string
  private httpRequestService: HttpRequestService
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
    //TODO add API Request
    return true
  }
}
