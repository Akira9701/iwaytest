import { Typography } from '@/shared/ui/Typography'
import styles from './mainPage.module.scss'
import Input from '@/shared/ui/Input'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store'
import TripsContainer from './ui/TripsContainer'
import { filterTripsHandler } from './lib/helpers'
import { Button } from '@/shared/ui/Button'
import { updateToken } from '@/entities/auth'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
  //Handlers
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  //Handlers

  //Data
  const trips = useAppSelector(state => state.trips.trips)
  const [filter, setFilter] = useState('')
  //Data

  return (
    <div className={styles.page__container}>
      <div className={styles.page__title__container}>
        <Typography variant="mediumRegular" className={styles.page__title}>
          Список поездок
        </Typography>
        <Button
          onClick={() => {
            navigate('/')
            dispatch(updateToken(''))
          }}
        >
          Выйти
        </Button>
      </div>

      <div className={styles.page__filter__container}>
        <Input
          onChange={setFilter}
          value={filter}
          placeHolder="Имя или email"
        />
      </div>
      <div className={styles.page__data__container}>
        {!!trips ? (
          <TripsContainer trips={filterTripsHandler(trips, filter)} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default MainPage
