import { FC, memo, useState } from 'react'
import styles from './tripsContainer.module.scss'
import { ITrip } from '@/shared/types'
import { createPortal } from 'react-dom'
import { Popover } from '@/shared/ui/Popover'
import { TripItem } from './ui/TripsItem'
import { TripPopoverData } from './ui/TripPopoverData'

interface ITripsContainer {
  trips: ITrip[]
}

const TripsContainer: FC<ITripsContainer> = ({ trips }) => {
  const [isVisiblePopover, setIsVisiblePopover] = useState(false)
  const [activeTrip, setActiveTrip] = useState<ITrip | null>(null)
  return (
    <div className={styles.trips__container}>
      {trips.map(trip => (
        <TripItem
          key={trip.order_id}
          onClick={() => {
            setActiveTrip(trip)
            setIsVisiblePopover(true)
          }}
          item={trip}
        />
      ))}
      {createPortal(
        <Popover
          setIsVisible={e => setIsVisiblePopover(e)}
          isVisible={isVisiblePopover}
        >
          <TripPopoverData trip={activeTrip} />
        </Popover>,
        document.getElementById('root') as HTMLElement,
      )}
    </div>
  )
}

export default memo(TripsContainer)
