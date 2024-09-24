import { Typography } from '@/shared/ui/Typography'
import styles from './mainPage.module.scss'
import Input from '@/shared/ui/Input'
import { useState } from 'react'

export const MainPage = () => {
  const [filter, setFilter] = useState('')
  return (
    <div className={styles.page__container}>
      <Typography variant="mediumRegular" className={styles.page__title}>
        Список поездок
      </Typography>
      <div className={styles.page__filter__container}>
        <Input
          onChange={setFilter}
          value={filter}
          placeHolder="Имя или email"
        />
      </div>
    </div>
  )
}

export default MainPage
