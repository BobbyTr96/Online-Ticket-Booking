import React from 'react'
import Intro from '../../components/Intro/Intro'
import App from './App/App'
import Banner from './Banner'
import MovieList from './MovieList'
import MovieSchedule from './MovieSchedules/MovieSchedule'

const Home = () => {
  return (
    <div>
        <Intro/>
        <Banner/>
        <MovieList/>
        <MovieSchedule/>
        <App/>
    </div>
  )
}

export default Home

