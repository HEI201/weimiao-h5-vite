import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

export const HlsPlayer = ({ url }) => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.controls = true
    videoRef.current.autoplay = true
    videoRef.current.style.width = '100%'
    videoRef.current.style.height = '100%'

    // play m3u8
    const hls = new Hls()
    hls.loadSource(url)
    hls.attachMedia(videoRef.current)
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      videoRef.current.play()
    })
  }, [])

  return <video ref={videoRef}></video>
}
