import { AuthApi } from '@/shared/api'

export const getAuthToken = async (name: string, password: string) => {
  try {
    const res = await AuthApi.getAuthToken(name, password)
    return res?.result?.token
  } catch (err: any) {
    throw new Error(err?.error || '')
  }
}
