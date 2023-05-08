export default interface AuthService {
    login (data: any): any
    logout (): any
    checkToken(token: string): Promise<boolean>
}
