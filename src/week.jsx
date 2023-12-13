import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ActionAreaCard from './action-area-card';
import { useCourseContext } from './context';
import { getChapters } from './services';

export const Week = () => {
  // store videos
  const [chapters, setChapters] = useState([])

  const { courseId, weekId } = useParams()

  const courseContext = useCourseContext()

  useEffect(() => {
    getChapters({ course_id: courseId, week_id: weekId })
      .then(({ data: { chapters, week_info } }) => {
        setChapters(chapters)
        courseContext.setChapters(chapters)
        courseContext.setCurrentWeek(week_info)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <Grid container spacing={2}>
      {chapters.map((chapter, i) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <Link
              to={`/courses/${courseId}/${weekId}/${chapter.chapter_id}`}
              underline="hover"
            >
              <ActionAreaCard
                prefix={`章节${i + 1}: `}
                desc={chapter.chapter_name}
              ></ActionAreaCard>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}
