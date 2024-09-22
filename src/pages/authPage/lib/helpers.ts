import { AuthApi } from '@/shared/api'

export const getAuthToken = async (name: string, password: string) => {
  const res = await AuthApi.getAuthToken(name, password)
  return res?.result?.token
}
