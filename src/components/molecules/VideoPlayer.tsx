import React from 'react'
import { IVideoPlayerProps } from '@/lib/types'

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoUrl }) => {

  return (
    <div>
      <video>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}
