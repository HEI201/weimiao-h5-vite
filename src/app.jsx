import { Outlet } from 'react-router-dom';
import { CourseProvider } from './context';
import { MyBreadcrumbs } from './my-breadcrumbs';

export default function App() {
  return (
    <CourseProvider>
      <MyBreadcrumbs></MyBreadcrumbs>
      <Outlet />
    </CourseProvider>
  )
}
