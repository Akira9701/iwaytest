import { FC } from 'react'
import { variants } from '../lib/index'
interface ITypography {
  variant: keyof typeof variants
  className?: string
  children?: React.ReactNode
}
export const Typography: FC<ITypography> = ({
  variant,
  className,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        fontWeight: variants[variant].fontWeight,
        fontSize: variants[variant].fontSize,
        fontFamily: variants[variant].fontFamily,
        lineHeight: variants[variant].lineHeight,
      }}
    >
      {children}
    </div>
  )
}
