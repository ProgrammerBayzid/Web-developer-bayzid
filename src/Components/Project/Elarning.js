import React from 'react'
import elarning from '../../assets/cardImg/elarning.png'

const Elarning = () => {
    return (
        <div className='min-h-screen bg-base-200'>
            <h1 className="text-3xl font-bold text-center">Project Detail Information</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={elarning} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-24'>
                        <h1 className="text-3xl font-bold">E-learning Courses Website</h1>
                        <p className="py-6">
                            This website is Courses Service provider website. <br /> <span className='text-xl font-bold'>Feature:</span><br /> 1.On this website, you can order any phone when you log in to this site. <br />
                            2. Courses Service provide <br />
                            3. Clint can see Courses service details <br />
                            4. Login, Register<br />
                            4. Privet Route <br />
                            5. Firebase<br />
                            6. Technology: React, React Routing, TailwindCSS, DaisyUI, Firebase Authentication, Express, MongoDB, Heroku, React hook form, React query.</p>
                        <p className='font-bold mb-5'>For More Informetion Visit the website</p>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            <a href="https://e-larning-200a4.web.app/"><button className="btn bg-indigo-500	text-white">Live Site</button></a>
                            <a href="https://github.com/ProgrammerBayzid/e-learning"><button className="btn bg-indigo-500	text-white">Clint Side Code</button></a>
                            <a href="https://github.com/ProgrammerBayzid/e-learning-server"><button className="btn bg-indigo-500	text-white">Server side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Elarning
