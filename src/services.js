// api services
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3800';
console.log("🚀 ~ file: services.js:5 ~ baseURL:", baseURL);
// create an instance of axios
const instance = axios.create({
    baseURL,
    timeout: 60 * 1000,
});

// response interceptor
instance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
});
const rests = {
    userInfo: '/api/userInfo',
    quickStudy: '/api/quickStudy',
    courses: '/api/courses',
    scheduleList: '/api/scheduleList',
    chapters: '/api/chapters',
    videoInfo: '/api/videoInfo',
};

const get = (url, params) => {
    return instance.get(url, { params });
};

const post = (url, params) => {
    return instance.post(url, params);
};

export const getUserInfo = () => {
    return post(rests.userInfo);
};

export const quickStudy = () => {
    return get(rests.quickStudy);
};
export const getCourses = () => {
    return get(rests.courses);
};

export const getScheduleList = ({ course_id }) => {
    return get(rests.scheduleList, { course_id });
};

export const getChapters = ({ course_id, week_id }) => {
    return get(rests.chapters, { course_id, week_id });
};


export const getVideoInfo = ({
    vid, // video id
    cid, // chapter id
    sharpness, // SD
    video_type, // 1
    course_id
}) => {
    return get(rests.videoInfo, {
        vid,
        cid,
        sharpness,
        video_type,
        course_id
    });
};