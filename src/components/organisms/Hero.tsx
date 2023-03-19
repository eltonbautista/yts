import React from 'react'
import { VideoPlayer } from '../molecules/VideoPlayer'
import { SearchFilters } from './SearchFilters'

export const Hero = () => {
  const [videoUrl, setVideoUrl] = React.useState<string>('')

  const handleUrlChange = (newUrl: string) => {
    setVideoUrl(newUrl)
  }
  // Behavior right now is that videoPlayer source is updated when searchFilters is submitted
  // But later on, we want to update the videoPlayer source when the user clicks on a video from the search results and not when the searchFilters is submitted
  // Submitting searchFilters should only update the search results and then the user can click on a video from the search results to update the videoPlayer source

  return (
    <div className="w-full bg-white px-4 py-20 text-center grid justify-items-center grid-rows-[auto_1fr]">
      <h1 className="mb-3 pb-2 text-4xl font-semibold md:text-7xl"><span className="font-light">Search For a </span>Video</h1>
      <SearchFilters videoUrl={videoUrl} onChange={handleUrlChange} onSubmit={handleUrlChange} />
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  )
}