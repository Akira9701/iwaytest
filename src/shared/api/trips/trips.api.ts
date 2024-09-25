import { axiosInstance } from '../instance/instance'
import { IAuthResponse } from './types'

export const AuthApi = {
  async getAuthToken(login: string, password: string): Promise<IAuthResponse> {
    // return axiosInstance.post('auth/login', {
    //   login,
    //   password,
    // })
    //TODO: Времмено закоменттил апи, так как данные авторизации не
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (login === 'test3' && password === 'test3') {
          return res({
            result: {
              token: '222222',
            },
          })
        } else {
          rej({ error: 'Invalid login' })
        }
      }, 5000)
    })
  },
}
