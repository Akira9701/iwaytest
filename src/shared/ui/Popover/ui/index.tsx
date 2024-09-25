import { FC } from 'react'
import styles from './popover.module.scss'
import cn from 'classnames'

interface IPopover {
  isVisible: boolean
  setIsVisible: (param: boolean) => void
  children: React.ReactNode
}

const Popover: FC<IPopover> = ({ isVisible, setIsVisible, children }) => {
  return (
    <div
      className={cn(
        styles.popover__container,
        !isVisible && styles.popover__disabled,
      )}
    >
      <div
        onClick={() => {
          setIsVisible(!isVisible)
        }}
        className={styles.popover__close_icon}
      ></div>
      {children}
    </div>
  )
}

export default Popover
