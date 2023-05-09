import { Container } from 'inversify'
import 'reflect-metadata'
import AuthService from '@/contracts/interfaces/services/AuthService'
import { Auth } from '@/services/api/Auth'
import { HttpRequestService } from '@/contracts/interfaces/services/HttpRequestService'
import { AxiosService } from '@/services/Axios/AxiosService'

const container: Container = new Container()

container.bind<AuthService>('AuthService').to(Auth).inSingletonScope()
container.bind<HttpRequestService>('HttpRequestService').to(AxiosService).inSingletonScope()
export default container
