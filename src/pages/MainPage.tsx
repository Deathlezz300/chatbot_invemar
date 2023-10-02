import React from 'react'
import { Chat } from '../Components/Chat'
import { RightBar } from '../Components/RightBar'

export const MainPage = () => {
  return (
    <section className='w-[100%] flex h-screen'>
        <Chat/>
        <RightBar/>
    </section>
  )
}
