import React from 'react'
import Banner from '../Banner'
import About from './About'
import ContuctUs from './ContuctUs'
import ProjectCard from './ProjectCard'
import Skills from './Skills'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <ProjectCard></ProjectCard>
            <ContuctUs></ContuctUs>
        </div>
    )
}

export default Home
