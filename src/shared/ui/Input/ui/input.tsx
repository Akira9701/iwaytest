import { Input } from 'antd'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface IAppInput {
  value: string
  setValue: (e: string) => void
  isPassword?: boolean
  className?: string
  placeHolder?: string
}

const AppInput: FC<IAppInput> = React.memo(
  ({ value, setValue, isPassword, className, placeHolder }) => {
    const field = isPassword ? (
      <Input.Password
        className={className}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder={placeHolder}
      />
    ) : (
      <Input
        className={className}
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder={placeHolder}
      />
    )
    return field
  },
)

export default AppInput
