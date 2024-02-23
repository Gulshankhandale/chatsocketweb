import React from 'react'
import { useRoutes } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const AppRouter = () => {
  return (
   useRoutes([AuthRoutes, AppRoutes])
  )
}

export default AppRouter;