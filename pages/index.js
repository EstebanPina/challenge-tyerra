import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout/index'
import VideoPlayer from '../components/VideoPlayer'
import VideosFeed from '../components/VideosFeed'

export default function Home() {
  return (
    <AppLayout>
      <VideosFeed></VideosFeed>
    </AppLayout>
  )
}
