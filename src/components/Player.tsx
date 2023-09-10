import React, { useEffect } from 'react'
import Hls from 'hls.js'

interface IVideoPlayerProps {
  id: string
  url: string
  isPlay: boolean
}

const Player: React.FC<IVideoPlayerProps> = ({ id, url, isPlay }) => {
  let videoNode: any = React.useRef<HTMLVideoElement>(null)

  useEffect(() => {
    var video: any = null
    video = document.getElementById(id)
    if (Hls.isSupported()) {
      var hls = new Hls({
        // debug: true
      })
      hls.loadSource(url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        video.muted = true
        videoNode.current = video
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url
      video.addEventListener('canplay', function () {
        videoNode.current = video
      })
    }
  }, [])

  useEffect(() => {
    videoNode.current.pause()
    if (isPlay) videoNode.current.play()
  }, [isPlay, videoNode])

  return <video ref={videoNode} id={id} controls muted></video>
}

export default Player
