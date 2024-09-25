import { FC } from 'react'
import styles from './textInfoRow.module.scss'
import { Typography } from '@/shared/ui/Typography'
import cn from 'classnames'
interface IRow {
  title?: string
  data: {
    title: string
    value: string
  }[]
  classNames?: string
  containerClassNames?: string
  isDataBellow?: boolean
}
export const TextInfoRow: FC<IRow> = ({
  data,
  classNames,
  title,
  containerClassNames,
  isDataBellow = false,
}) => {
  return (
    <div className={cn(styles.row__container, containerClassNames)}>
      {title ? (
        <Typography variant="mediumBold" className={styles.row__title}>
          {title}
        </Typography>
      ) : (
        <></>
      )}
      <div className={cn(styles.row__wrap, classNames)}>
        {data.map((item, i) => (
          <Typography variant="mediumRegular" key={i}>
            {/* Здесь индекс в качестве ключа можно использовать, так содержание динамически не меняется */}
            <span className={styles.property__title}>{item.title} - </span>
            {isDataBellow ? <br /> : <></>}
            <span>{item.value}</span>
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default TextInfoRow
