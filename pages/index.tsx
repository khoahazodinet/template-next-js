import { NextPageWithLayout } from '@/models/index'
import React from 'react'
import styles from '../styles/Home.module.css'
import MainLayout from '@/components/layout/main'

const Home: NextPageWithLayout = () => {
  const [state] = React.useState('a')

  React.useEffect(() => {
    console.log(state)
  }, [state])


  return (
    <div className={styles.container}>
      <h1>main page</h1>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
