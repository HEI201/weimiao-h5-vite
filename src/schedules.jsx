import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ActionAreaCard from './action-area-card';
import { useCourseContext } from './context';
import { getScheduleList } from './services';

export const Schedules = () => {
  const [schedules, setSchedules] = useState([])
  const { courseId } = useParams()
  const courseContext = useCourseContext()

  useEffect(() => {
    const cc = courseContext.courses.find(
      (c) => c.course_id === parseInt(courseId)
    )
    courseContext.setCurrentCourse(cc)

    getScheduleList({ course_id: courseId })
      .then((res) => {
        setSchedules(res.data)
        courseContext.setSchedules(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <Grid container spacing={2}>
      {schedules.map((schedule, i) => {
        return (
          <Grid item xs={4} key={i}>
            <Link to={`/courses/${courseId}/${schedule.week_id}`}>
              <ActionAreaCard
                prefix={`周${i+1}: `}
                desc={schedule.course_week_name}
              ></ActionAreaCard>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}
