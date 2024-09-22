import { Button } from 'antd'
import { FC, ReactNode } from 'react'

interface IAppButton {
  children: ReactNode
  isLoading: boolean
  onClick: () => void
}

const AppButton: FC<IAppButton> = ({ children, isLoading, onClick }) => {
  return (
    <Button onClick={onClick} disabled={isLoading}>
      {children}
    </Button>
  )
}

export default AppButton
