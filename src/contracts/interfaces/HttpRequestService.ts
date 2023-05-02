"use strict";
export interface HttpRequestService {
  post(path: string, data: any, options: any | null): any

  get(path: string, data: any, options: any | null): any

  put(path: string, data: any, options: any | null): any

  delete(path: string, options: any | null): any
}
