import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from './action-area-card';
import { useCourseContext } from './context';
import { getCourses } from './services';

export const Courses = () => {
  // store courses
  const [courses, setCourses] = useState([])
  const courseContext = useCourseContext()

  useEffect(() => {
    getCourses()
      .then((response) => {
        setCourses(response.data)
        courseContext.setCourses(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing={1}>
      {courses.map((course, i) => {
        return (
          <Grid xs={12} md={6} lg={4} key={i}>
            <Link to={`/courses/${course.course_id}/`} underline="hover">
              <ActionAreaCard
                prefix={`课程${i + 1}: `}
                desc={course.course_name}
              ></ActionAreaCard>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}
