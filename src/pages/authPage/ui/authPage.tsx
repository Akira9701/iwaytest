import Input from '@/shared/ui/Input'
import styles from './authPage.module.scss'
import { Typography } from '@/shared/ui/Typography'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { getAuthToken } from '../lib/helpers'
import { useAppDispatch } from '@/app/store'
import { updateToken } from '@/entities/auth'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  //Utils
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  //Utils

  //Data
  const [data, setData] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  //Data

  //Handlers
  const getAuthTokenHandler = async () => {
    if ((data.username, data.password)) {
      try {
        console.log(3)
        setIsLoading(true)
        const token = await getAuthToken(data.username, data.password)
        token && dispatch(updateToken(token))
        setIsLoading(false)
        navigate('/', { replace: true })
      } catch (error) {
        setIsLoading(false)
      }
    }
  }
  //Handlers
  return (
    <div className={styles.auth_page__container}>
      <div className={styles.auth_page__wrap}>
        <Typography variant="largeBold" className={styles.auth_page__title}>
          Login
        </Typography>
        <div className={styles.auth_page__form__container}>
          <Input
            value={data.username}
            placeHolder="user name"
            onChange={(e: string) =>
              setData(prev => ({ ...prev, username: e }))
            }
          />
          <Input
            value={data.password}
            isPassword={true}
            placeHolder="user name"
            onChange={(e: string) =>
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
