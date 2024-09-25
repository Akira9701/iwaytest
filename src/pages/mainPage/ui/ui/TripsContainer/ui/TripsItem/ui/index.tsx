import { ITrip } from '@/shared/types'
import { FC, memo } from 'react'
import styles from './tripsItem.module.scss'
import { Typography } from '@/shared/ui/Typography'
import { formatDate } from '@/shared/lib/dateFormaters'
import {
  getStatusInfo,
  tripStatusInfoType,
} from '@/pages/mainPage/ui/lib/helpers'
import { TextInfoRow } from '@/shared/ui/TextInfoRow'
interface ITripsItem {
  item: ITrip
  onClick: () => void
}

const TripsItem: FC<ITripsItem> = ({ item, onClick }) => {
  const status = getStatusInfo(item.status as tripStatusInfoType)
  return (
    <div className={styles.item__container} onClick={() => onClick()}>
      <Typography className={styles.item__address} variant="largeBold">
        {item.location_address} → {item.destination_address_object.address}
      </Typography>
      <div className={styles.item__data__wrap}>
        <div>
          <TextInfoRow
            title="Даты"
            data={[
              { title: 'Дата отъезда', value: formatDate(item.date_departure) },
              { title: 'Дата прибытия', value: formatDate(item.date_arrival) },
            ]}
          />
          <TextInfoRow
            title="Автомобиль"
            data={[
              { title: 'Модель', value: item.car_data.models },
              {
                title: 'Вместимость',
                value: item.car_data.capacity.toString(),
              },
            ]}
          />
          <TextInfoRow
            title="Пассажиры"
            data={item.passengers.map(el => ({
              title: 'Имя',
              value: `${el.name} - ${el.email}`,
            }))}
          />
        </div>
        <div>
          <TextInfoRow
            title="Водитель"
            data={[
              {
                title: 'Имя',
                value: item.driver_data.driver_name,
              },
              {
                title: 'Телефон',
                value: item.driver_data.driver_phone,
              },
            ]}
          />
        </div>
      </div>

      <div
        className={styles.item__status}
        style={{
          color: status.color,
        }}
      >
        <Typography variant="mediumBold">{status.status}</Typography>
      </div>
    </div>
  )
}

export default memo(TripsItem)
