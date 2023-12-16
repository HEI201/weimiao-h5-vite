import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ActionAreaCard from './action-area-card';
import { useCourseContext } from './context';
import { getChapters } from './services';

export const Chapters = () => {
  const { courseId, weekId, chapterId } = useParams()
  const [videos, setVideos] = useState([])
  const courseContext = useCourseContext()

  useEffect(() => {
    const cch = courseContext.chapters.find(
      (ch) => ch.chapter_id === parseInt(chapterId)
    )
    courseContext.setCurrentChapter(cch)

    getChapters({ course_id: courseId, week_id: weekId })
      .then(({ data: { chapters, week_info } }) => {
        const videos_data = chapters.find(
          (c) => c.chapter_id === parseInt(chapterId)
        ).videos
        setVideos(videos_data)
        courseContext.setVideos(videos_data)
        courseContext.setCurrentWeek(week_info)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <Grid container spacing={2}>
      {videos.map((video, i) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <Link
              to={`/courses/${courseId}/${weekId}/${chapterId}/${video.v_id}`}
              underline="hover"
            >
              <ActionAreaCard
                prefix={`视频${i + 1}: `}
                desc={video.name}
              ></ActionAreaCard>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}
