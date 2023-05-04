export function requestInterceptor (request: any): any {
  const token: string | null = localStorage.getItem('token')
  if (token) {
    request.headers.Authorization = token
  }
  return request
}
