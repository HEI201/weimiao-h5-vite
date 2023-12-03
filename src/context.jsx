// create context
import { createContext, useContext, useState } from 'react';

const initialContext = {
  courses: [],
  currentCourse: {},
  schedules: [],
  currentSchedule: {},
  chapters: [],
  currentChapter: {},
  weeks: [],
  currentWeek: {},
  videos: [],
  currentVideo: {},
  setCourses: () => {},
  setCurrentCourse: () => {},
  setSchedules: () => {},
  setCurrentSchedule: () => {},
  setChapters: () => {},
  setCurrentChapter: () => {},
  setWeeks: () => {},
  setCurrentWeek: () => {},
  setVideos: () => {},
  setCurrentVideo: () => {},
}

const CourseContext = createContext(initialContext)

export const useCourseContext = () => {
  return useContext(CourseContext)
}

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([])
  const [currentCourse, setCurrentCourse] = useState({})
  const [schedules, setSchedules] = useState([])
  const [currentSchedule, setCurrentSchedule] = useState({})
  const [chapters, setChapters] = useState([])
  const [currentChapter, setCurrentChapter] = useState({})
  const [weeks, setWeeks] = useState([])
  const [currentWeek, setCurrentWeek] = useState({})
  const [videos, setVideos] = useState([])
  const [currentVideo, setCurrentVideo] = useState({})
  const value = {
    courses,
    currentCourse,
    schedules,
    currentSchedule,
    chapters,
    currentChapter,
    weeks,
    currentWeek,
    videos,
    currentVideo,
    setCourses,
    setCurrentCourse,
    setSchedules,
    setCurrentSchedule,
    setChapters,
    setCurrentChapter,
    setWeeks,
    setCurrentWeek,
    setVideos,
    setCurrentVideo,
  }
  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  )
}
