import { AuthPage } from '../../pages/authPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { MainPage } from '@/pages/mainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />, // Replace with your main page component name
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
    ],
  },
  // Add more routes as needed
])

export enum RoutePath {
  Auth = '/auth',
  Main = '/',
}

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
