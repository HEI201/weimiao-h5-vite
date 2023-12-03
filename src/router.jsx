import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import { Chapters } from './chapter';
import { Courses } from './courses';
import ErrorPage from './error-page';
import { Schedules } from './schedules';
import { VideoPlayer } from './video';
import { Week } from './week';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/courses',
        element: <Courses />, // course list
      },
      {
        path: '/courses/:courseId',
        element: <Schedules />, // week list
      },
      {
        path: '/courses/:courseId/:weekId',
        element: <Week />, // chapter list
      },
      {
        path: '/courses/:courseId/:weekId/:chapterId',
        element: <Chapters />, // video list
      },
      {
        path: '/courses/:courseId/:weekId/:chapterId/:videoId',
        element: <VideoPlayer />, // video player
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>
}
