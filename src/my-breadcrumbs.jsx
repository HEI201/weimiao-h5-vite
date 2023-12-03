import Breadcrumbs from '@mui/material/Breadcrumbs';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useParams } from 'react-router-dom';
import { useCourseContext } from './context';

export const MyBreadcrumbs = () => {
  const { courseId, chapterId, weekId, videoId } = useParams()
  const courseContext = useCourseContext()
  const breadcrumbs = [
    <Link key="home" to="/courses">
      Home
    </Link>,
  ]
  if (courseId) {
    breadcrumbs.push(
      <Link key="course" to={`/courses/${courseId}`}>
        course: {courseContext.currentCourse?.course_name}
      </Link>
    )
  }
  if (weekId) {
    breadcrumbs.push(
      <Link key="week" to={`/courses/${courseId}/${weekId}`}>
        week: {courseContext.currentWeek?.week_title}
      </Link>
    )
  }
  if (chapterId) {
    breadcrumbs.push(
      <Link key="chapter" to={`/courses/${courseId}/${weekId}/${chapterId}`}>
        chapter: {courseContext.currentChapter?.chapter_name}
      </Link>
    )
  }
  if (videoId) {
    breadcrumbs.push(
      <Link
        key="video"
        to={`/courses/${courseId}/${weekId}/${chapterId}/${videoId}`}
      >
        video: {courseContext.currentVideo?.name}
      </Link>
    )
  }
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="medium" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  )
}
