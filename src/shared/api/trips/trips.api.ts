import { axiosInstance } from '../instance/instance'
import { IAuthResponse } from './types'

export const AuthApi = {
  async getAuthToken(login: string, password: string): Promise<IAuthResponse> {
    return axiosInstance.post('auth/login', {
      login,
      password,
    })
  },
}
