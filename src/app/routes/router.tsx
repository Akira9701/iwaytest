import { AuthPage } from '../../pages/authPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
