'use strict'

import { inject, injectable } from 'inversify'
import { HttpRequestService } from '@/contracts/interfaces/services/HttpRequestService'

@injectable()
export default abstract class ApiService {
  protected httpRequestService: HttpRequestService;
  constructor (@inject('HttpRequestService') httpRequestService: HttpRequestService) {
    this.httpRequestService = httpRequestService
  }
}
