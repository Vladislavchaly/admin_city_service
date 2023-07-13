import 'reflect-metadata'
import AuthService from '@/contracts/interfaces/services/AuthService'
import { injectable } from 'inversify'
import User from '@/contracts/interfaces/User'
import ApiService from '@/services/api/ApiService'

@injectable()
export class Auth extends ApiService implements AuthService {
  private authUser: any

  login (data: any): any {
    return this.httpRequestService.post('auth/login', data, null)
  }

  logout (): any {
    return this.httpRequestService.delete('auth/logout/', null)
  }

  async checkToken (token: string): Promise<boolean> {
    return !!(await this.getAuthUser())
  }

  async getAuthUser (): Promise<User> {
    if (this.authUser) {
      return this.authUser
    }
    this.authUser = this.httpRequestService.get('users/me', null, null)
    return this.authUser
  }
}
