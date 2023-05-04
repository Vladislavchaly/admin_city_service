export function responseInterceptor (response: any): any {
  console.log('response', response)
  return response
}
