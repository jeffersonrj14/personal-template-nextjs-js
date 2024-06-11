import PagesMetaHead from '@/components/PagesMetaHead'
import Spotify from '@/components/Spotify/NowPlaying'

export default function Home() {
  return (
    <div className='container mx-auto text-jefferson-light'>
      <PagesMetaHead title='Home' />
      <Spotify />
    </div>
  )
}
