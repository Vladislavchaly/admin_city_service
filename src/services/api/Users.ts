'use strict'

import ApiService from '@/services/api/ApiService'
import User from '@/contracts/interfaces/User'

export default class UserService extends ApiService {
  public async update (data: User): Promise<User> {
    return this.httpRequestService.put('users/', data, '')
  }

  public updateById (id: number, data: User): User {
    return this.httpRequestService.put(`users/${id}`, data, '')
  }

  public async getAll (): Promise<User[]> {
    return this.httpRequestService.get('users/', null, null)
  }

  public getById (id: number): User[] {
    return this.httpRequestService.get(`users/${id}`, null, null)
  }
}
