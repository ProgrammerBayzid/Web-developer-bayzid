import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import b from "../assets/img/b.jpg"
import Resume from './Pages/Resume/Resume';


const Banner = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <section>
            <div className='hero'>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{

                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#0000FF",
                            },
                            links: {
                                color: "blue",
                                distance: 150,
                                enable: false,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 3, max: 7 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div>
                <div className="hero min-h-screen bg-base-100 shadow-xl">
                    <div className="hero-content flex-col  lg:flex-row-reverse">
                        <img src={b} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold text-black">Welcome to my Portfolio Website</h1>
                            <h1 className="text-5xl font-bold text-black mt-5">Hi! I'am Bayzid<span>  </span>
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Web Developer', 'MERN Stack Developer', 'React Developer', 'Front-end Developer', 'Back-end Developer']}
                                        loop={100000000000}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>

                            </h1>
                            <p className="py-6 text-black">I am a Dedicated professional web-developer and designer with almost a decade of experience. As veteran in the industry I have seen it all and I am always looking for clients who challenge me creatively. I know hoe to survive in this industry and i want to help your business do the same. Clint Satisfaction make me happy.</p>
                            <div className='flex gap-5'>
                                <Link to='/project'>
                                    <button className="btn bg-indigo-500	text-white">Protfolio</button>
                                </Link>
                                <Resume></Resume>
                            </div>
                        </div>
                    </div>
                </div>


                <p>


                </p>

            </div>
            <div>

            </div>
        </section>
    )
}

export default Banner
