import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCourseContext } from './context';
import { HlsPlayer } from './hls-player';
import { getVideoInfo } from './services';
export const VideoPlayer = () => {
  const { courseId, chapterId, videoId } = useParams()
  const [url, setUrl] = useState('')
  const courseContext = useCourseContext()

  useEffect(() => {
    const cv = courseContext.videos.find((v) => v.v_id === parseInt(videoId))
    courseContext.setCurrentVideo(cv)

    getVideoInfo({
      course_id: courseId,
      cid: chapterId,
      vid: videoId,
      sharpness: 'SD',
      video_type: '1',
    })
      .then((m3u8_file_url) => {
        console.log(
          '🚀 ~ file: video.jsx:18 ~ .then ~ m3u8_file_url:',
          m3u8_file_url
        )
        setUrl(m3u8_file_url)
      })
      .catch((e) => {
        console.error('🚀 ~ file: h5.jsx:30 ~ .then ~ e:', e)
      })
  }, [])

  return <HlsPlayer url={url} key={url}></HlsPlayer>
}
