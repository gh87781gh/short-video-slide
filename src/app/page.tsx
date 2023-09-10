'use client'

import React, { useState, useEffect } from 'react'
import Home from '../views/Home'
import GlobalApi from '../api/GlobalApi'

export type Datatype = {
  title: string
  play_url: string
  cover: string
  isPlay: boolean
}

export default function HomePage() {
  const api = new GlobalApi()
  const [data, setData] = useState<Datatype[]>([])

  useEffect(() => {
    api.getFollowingList().then((res: any) => setData(res.items))
  }, [])

  return data.length > 0 ? <Home data={data} /> : null
}
