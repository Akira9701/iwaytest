import Input from '@/shared/ui/Input'
import styles from './authPage.module.scss'
import { Typography } from '@/shared/ui/Typography'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { getAuthToken } from '../lib/helpers'
import { useAppDispatch } from '@/app/store'
import { updateToken } from '@/entities/auth'

export const AuthPage = () => {
  //Data
  const [data, setData] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  //Data

  //Handlers
  const getAuthTokenHandler = async () => {
    if ((data.username, data.password)) {
      try {
        setIsLoading(true)
        const token = await getAuthToken(data.username, data.password)
        token && dispatch(updateToken(token))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
  }
  //Handlers
  return (
    <div className={styles.auth_page__container}>
      <div className={styles.auth_page__wrap}>
        <Typography
          variant="largeBold"
          title="Login"
          className={styles.auth_page__title}
        />
        <div className={styles.auth_page__form__container}>
          <Input
            value={data.username}
            placeHolder="user name"
            setValue={(e: string) =>
              setData(prev => ({ ...prev, username: e }))
            }
          />
          <Input
            value={data.password}
            isPassword={true}
            placeHolder="user name"
            setValue={(e: string) =>
              setData(prev => ({ ...prev, password: e }))
            }
          />
        </div>
        <Button
          onClick={() => {
            !isLoading && getAuthTokenHandler()
          }}
          isLoading={isLoading}
        >
          <p>Login</p>
        </Button>
      </div>
    </div>
  )
}
