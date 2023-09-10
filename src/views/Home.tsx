'use client'

import React, { useState, useEffect, useRef, createRef } from 'react'
import styled from 'styled-components'
import Player from '../components/Player'
import $ from 'jquery'

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

type PropsType = {
  data: any[]
}

const Home: React.FC<PropsType> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0)
  const shotsRef = useRef(data.map(() => createRef()))
  const mainRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scroll = window.scrollY
    let newId = currentIndex
    shotsRef.current.forEach((ref, index) => {
      const offsetTop = (ref?.current as HTMLBaseElement)?.offsetTop
      if (scroll == 0) {
        newId = 0
      } else if (scroll == document.body.clientHeight) {
        newId = data.length - 1
      } else if (scroll > offsetTop - window.innerHeight / 2) {
        newId = index
      }
    })
    setCurrentIndex(newId)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log('currentIndex:', currentIndex)
    data.forEach((item: any, index: number) => {
      item.isPlay = index == currentIndex ? true : false
    })

    if (currentIndex !== null) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: currentIndex * window.innerHeight
        },
        'linear'
      )
    }
  }, [data, currentIndex])

  return (
    <main ref={mainRef} style={{ overflow: 'auto' }}>
      {data?.map((item: any, index: number) => (
        <Shot
          ref={
            shotsRef.current
              ? (shotsRef.current[index] as React.RefObject<HTMLDivElement>)
              : null
          }
          key={index}
        >
          <Player
            id={item.title}
            url={item.play_url}
            isPlay={index == currentIndex}
          />
        </Shot>
      ))}
    </main>
  )
}
export default Home
