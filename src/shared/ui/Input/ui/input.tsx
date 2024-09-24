import { Input } from 'antd'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface IAppInput {
  value: string
  onChange: (e: string) => void
  isPassword?: boolean
  className?: string
  placeHolder?: string
}

const AppInput: FC<IAppInput> = React.memo(
  ({ value, onChange, isPassword, className, placeHolder }) => {
    const field = isPassword ? (
      <Input.Password
        className={className}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        placeholder={placeHolder}
      />
    ) : (
      <Input
        className={className}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        placeholder={placeHolder}
      />
    )
    return field
  },
)

export default AppInput
