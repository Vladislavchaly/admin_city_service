import { Container } from 'inversify'
import 'reflect-metadata'
import AuthService from '@/contracts/interfaces/services/AuthService'
import { Auth } from '@/services/api/Auth'
import { HttpRequestService } from '@/contracts/interfaces/services/HttpRequestService'
import { AxiosService } from '@/services/Axios/AxiosService'
import UserService from '@/services/api/Users'

const container: Container = new Container()

container.bind<AuthService>('AuthService').to(Auth).inSingletonScope()
container.bind<UserService>('UserService').to(UserService).inSingletonScope()
container.bind<HttpRequestService>('HttpRequestService').to(AxiosService).inSingletonScope()
export default container
