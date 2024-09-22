import { FC } from 'react'
import { variants } from '../lib/index'
interface ITypography {
  title: string
  variant: keyof typeof variants
  className?: string
}
export const Typography: FC<ITypography> = ({ title, variant, className }) => {
  return (
    <p
      className={className}
      style={{
        fontWeight: variants[variant].fontWeight,
        fontSize: variants[variant].fontSize,
        fontFamily: variants[variant].fontFamily,
        lineHeight: variants[variant].lineHeight,
      }}
    >
      {title}
    </p>
  )
}
