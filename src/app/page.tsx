'use client'

import React, { useState, useEffect, useRef, createRef, use } from 'react'
import styled from 'styled-components'

const Shot = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  overflow: hidden;
  border: 1px solid black;

  video {
    width: 100%;
    height: 100%;
  }
`

export default function Home() {
  const data = [
    {
      id: '0',
      title: 'Big Buck Bunny',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Vlc Media Player',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: '25254545 Subscribers',
      isLive: true
    },
    {
      id: '1',
      title: 'The first Blender Open Movie from 2006',
      thumbnailUrl:
        'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '12:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Blender Inc.',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description:
        'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
      subscriber: '25254545 Subscribers',
      isLive: true
    },
    {
      id: '2',
      title: 'For Bigger Blazes',
      thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'T-Series Regional',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description:
        'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
      subscriber: '25254545 Subscribers',
      isLive: true
    },
    {
      id: '3',
      title: 'For Bigger Escape',
      thumbnailUrl:
        'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'T-Series Regional',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: '25254545 Subscribers',
      isLive: false
    },
    {
      id: '4',
      title: 'Big Buck Bunny',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Vlc Media Player',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: '25254545 Subscribers',
      isLive: true
    },
    {
      id: '5',
      title: 'For Bigger Blazes',
      thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'T-Series Regional',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description:
        'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
      subscriber: '25254545 Subscribers',
      isLive: false
    },
    {
      id: '6',
      title: 'For Bigger Escape',
      thumbnailUrl:
        'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'T-Series Regional',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: '25254545 Subscribers',
      isLive: true
    },
    {
      id: '7',
      title: 'The first Blender Open Movie from 2006',
      thumbnailUrl:
        'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '12:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Blender Inc.',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description:
        'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
      subscriber: '25254545 Subscribers',
      isLive: false
    }
  ]
  const shotsRef = useRef(data.map(() => createRef()))
  const [currentId, setCurrentId] = useState(0)

  const handleScroll = () => {
    const scroll = window.scrollY
    let newId = currentId
    shotsRef.current.forEach((ref, index, ary) => {
      const offsetTop = (ary[index]?.current as HTMLBaseElement)?.offsetTop
      const offsetTopNext = (ary[index + 1]?.current as HTMLBaseElement)
        ?.offsetTop
      if (
        scroll > offsetTop - window.innerHeight / 2 &&
        scroll < offsetTopNext + window.innerHeight / 2
      ) {
        newId = index
      }
    })
    setCurrentId(newId)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    shotsRef.current.forEach((ref, index) => {
      const vid = (ref.current as HTMLDivElement)?.querySelector('video')
      index !== currentId ? vid?.pause() : vid?.play()
    })
  }, [currentId])

  return (
    <main>
      {data.map(
        (item, index) =>
          shotsRef.current[index] && (
            <Shot
              ref={shotsRef.current[index] as React.RefObject<HTMLDivElement>}
              key={index}
              className={`item item-${index}`}
            >
              <video controls muted>
                <source src={item.videoUrl} type='video/mp4' />
              </video>
            </Shot>
          )
      )}
    </main>
  )
}
