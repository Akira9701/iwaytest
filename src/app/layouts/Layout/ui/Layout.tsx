import { FC, useEffect } from 'react'
import styles from './layout.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/app/store'
import { RoutePath } from '@/app/routes'

export const Layout: FC = () => {
  //Utils
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
  return (
    <div className={styles.layout__container}>
      <Outlet />
    </div>
  )
}
