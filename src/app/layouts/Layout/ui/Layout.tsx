import { FC, useEffect } from 'react'
import styles from './layout.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { RoutePath } from '@/app/routes'
import { setTrips } from '@/entities/trips'
import { testData } from '@/shared/constants/testData'

export const Layout: FC = () => {
  //Utils
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  //Utils

  //Token
  const token = useAppSelector(state => state.authorization.token)
  //Token
  useEffect(() => {
    if (!token) {
      navigate(RoutePath.Auth)
    }
  }, [token])

  //Emulate Loadfing
  useEffect(() => {
    console.log(token, testData)
    if (token)
      setTimeout(() => {
        dispatch(setTrips(testData))
      }, 3000)
  }, [])
  //Emulate Loadfing

  return (
    <div className={styles.layout__container}>
      <Outlet />
    </div>
  )
}
