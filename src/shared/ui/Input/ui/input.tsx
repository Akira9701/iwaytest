import { Input } from 'antd'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface IAppInput {
  value: string
  onChange: (e: string) => void
  isPassword?: boolean
  className?: string
  placeHolder?: string
  status?: '' | 'warning' | 'error' | undefined
}

const AppInput: FC<IAppInput> = React.memo(
  ({ value, onChange, isPassword, className, placeHolder, status }) => {
    const field = isPassword ? (
      <Input.Password
        status={status}
        className={className}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        placeholder={placeHolder}
      />
    ) : (
      <Input
        status={status}
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
