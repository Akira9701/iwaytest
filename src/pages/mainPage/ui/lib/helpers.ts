import { ITrip } from '@/shared/types'

export const filterTripsHandler = (trips: ITrip[], filter: string): ITrip[] => {
  return trips.filter(
    trip =>
      trip.passengers.find(el =>
        el.name.toLowerCase().includes(filter.toLowerCase()),
      ) ||
      trip.passengers.find(el =>
        el.email.toLowerCase().includes(filter.toLowerCase()),
      ),
  )
}

const tripStatusInfo = {
  0: { status: 'Ожидание обработки', color: 'green' },
  1: { status: 'Обработка', color: 'green' },
  2: { status: 'Принято', color: 'green' },
  3: { status: 'Завершённый', color: 'green' },
  4: { status: 'Отменено без штрафа', color: 'red' },
  5: { status: 'Отменено со штрафом', color: 'red' },
  6: { status: 'Неоплаченный', color: 'red' },
  7: { status: 'Измененный', color: 'orange' },
}

export type tripStatusInfoType = keyof typeof tripStatusInfo

export const getStatusInfo = function (status: tripStatusInfoType) {
  return (
    tripStatusInfo[status] || { status: 'Неизвестный статус', color: 'grey' }
  )
}
