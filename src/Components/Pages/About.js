import React from 'react'

import me from '../../assets/img/me.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {

    return (
        <div className='min-h-screen bg-base-100 shadow-xl mt-32'>
            <div className='mb-7'>
                <h1 className='font-bold text-3xl text-center '>Get To Know
                </h1>
                <h1 className='font-bold text-3xl text-center'>
                    About Me</h1>
            </div>

            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={me} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">

                        <div className="grid lg:grid-cols-3  lg:ml-24 ">
                            <div className="card w-56 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <FaAward className="about_icon" />
                                    <h2 className="card-title">Experience</h2>
                                    <p>2+ Years Working</p>
                                </div>
                            </div>
                            <div className="card w-56 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <FiUsers className="about_icon" />
                                    <h2 className="card-title">Clients</h2>
                                    <p>200+ Worldwide</p>
                                </div>
                            </div>
                            <div className="card w-56 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <VscFolderLibrary className="about_icon" />
                                    <h2 className="card-title">Projects</h2>
                                    <p>20+ Completed</p>
                                </div>
                            </div>

                        </div>
                        <div className='lg:ml-24 mt-10'>
                            <p >
                                Hello !! My name is MD: Bayzid Islam Nishat. I want to gain confidence
                                and fame using my potential in this position, and express my
                                innovative creative skills for self and company growth. I am a
                                hardworking and quick learner person. I believe hard work is the
                                only way to success. Love to learn new technology and try to improve
                                myself.
                            </p>
                            <a href="" className="btn bg-indigo-500	text-white mt-5">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
