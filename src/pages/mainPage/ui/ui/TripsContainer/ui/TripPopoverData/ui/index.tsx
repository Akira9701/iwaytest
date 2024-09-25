import { ITrip } from '@/shared/types'
import { FC } from 'react'
import styles from './tripPopoverData.module.scss'
import { Typography } from '@/shared/ui/Typography'
import { TextInfoRow } from '@/shared/ui/TextInfoRow'
import { formatDate } from '@/shared/lib/dateFormaters'
import {
  getStatusInfo,
  tripStatusInfoType,
} from '@/pages/mainPage/ui/lib/helpers'
interface ITripPopoverData {
  trip: ITrip | null
}

const TripPopoverData: FC<ITripPopoverData> = ({ trip }) => {
  const status = trip ? getStatusInfo(trip.status as tripStatusInfoType) : null

  return (
    <div className={styles.popover__container}>
      {trip ? (
        <div className={styles.item__container}>
          <Typography className={styles.item__address} variant="largeBold">
            {trip.location_address} → {trip.destination_address_object.address}
          </Typography>
          <div className={styles.item__data__wrap}>
            {/* Первая колонка */}
            <div>
              {/* Даты поездки */}
              <TextInfoRow
                title="Даты"
                data={[
                  {
                    title: 'Дата отъезда',
                    value: formatDate(trip.date_departure),
                  },
                  {
                    title: 'Дата прибытия',
                    value: formatDate(trip.date_arrival),
                  },
                ]}
              />

              {/* Данные об автомобиле */}
              <TextInfoRow
                title="Автомобиль"
                data={[
                  { title: 'Модель', value: trip.car_data.models },
                  {
                    title: 'Вместимость',
                    value: trip.car_data.capacity.toString(),
                  },
                  { title: 'Класс автомобиля', value: trip.car_data.car_class },
                ]}
              />

              {/* Данные о пассажирах */}
              <TextInfoRow
                title="Пассажиры"
                data={trip.passengers.map(el => ({
                  title: 'Имя',
                  value: el.name,
                }))}
              />

              {/* Номер брони и номера телефонов */}
              <TextInfoRow
                title="Информация о брони"
                data={[
                  { title: 'Номер брони', value: trip.booker_number },
                  { title: 'Номер отправления', value: trip.departure_number },
                  { title: 'Номер прибытия', value: trip.arrival_number },
                ]}
              />

              {/* Дополнительное время */}
              <TextInfoRow
                title="Дополнительное время"
                data={[
                  {
                    title: 'Допустимое время ожидания',
                    value: `${trip.allowable_time} мин`,
                  },
                  {
                    title: 'Время ожидания без штрафа',
                    value: `${trip.cancellation_time_without_penalty} мин`,
                  },
                ]}
              />
            </div>

            {/* Вторая колонка */}
            <div>
              {/* Данные о водителе */}
              <TextInfoRow
                title="Водитель"
                data={[
                  {
                    title: 'Имя',
                    value: trip.driver_data.driver_name,
                  },
                  {
                    title: 'Телефон',
                    value: trip.driver_data.driver_phone,
                  },
                  {
                    title: 'Автомобиль',
                    value: trip.driver_data.driver_car,
                  },
                ]}
              />

              {/* Данные об адресах */}
              <TextInfoRow
                title="Адреса"
                data={[
                  { title: 'Адрес отправления', value: trip.location_address },
                  {
                    title: 'Адрес назначения',
                    value: trip.destination_address,
                  },
                ]}
              />

              {/* Цена и валюта */}
              <TextInfoRow
                title="Стоимость"
                data={[
                  {
                    title: 'Стоимость',
                    value: `${trip.price.price} ${trip.currency}`,
                  },
                  {
                    title: 'Доплата за дополнительный адрес',
                    value: trip.additional_address ? 'Да' : 'Нет',
                  },
                ]}
              />

              {/* Данные о статусе и услугах */}
              <TextInfoRow
                title="Статус и услуги"
                data={[
                  {
                    title: 'Статус поездки',
                    value: status?.status || '',
                  }, // Используй функцию для статуса
                  {
                    title: 'Дополнительные услуги',
                    value: trip.additional_services.length ? 'Да' : 'Нет',
                  },
                  {
                    title: 'Платные дороги',
                    value: trip.fare_on_toll_road ? 'Да' : 'Нет',
                  },
                ]}
              />

              {/* Услуги и опции отправки документов */}
              <TextInfoRow
                title="Документы и услуги"
                data={[
                  {
                    title: 'Документ для клиента',
                    value: trip.send_params[0]?.send_client_doc
                      ? 'Отправлено'
                      : 'Не отправлено',
                  },
                  {
                    title: 'Документ для админа',
                    value: trip.send_params[0]?.send_admin_doc
                      ? 'Отправлено'
                      : 'Не отправлено',
                  },
                ]}
              />
            </div>
          </div>

          {status ? (
            <div
              className={styles.item__status}
              style={{
                color: status.color,
              }}
            >
              <Typography variant="mediumBold">{status.status}</Typography>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TripPopoverData
