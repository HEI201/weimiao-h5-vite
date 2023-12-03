import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CourseProvider } from './context';
import { MyBreadcrumbs } from './my-breadcrumbs';

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/courses')
  }, [])
  return (
    <CourseProvider>
      <MyBreadcrumbs></MyBreadcrumbs>
      <Outlet />
    </CourseProvider>
  )
}
