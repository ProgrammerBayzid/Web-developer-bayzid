import React from 'react'
import photo from '../../assets/cardImg/photo.png'

const Photography = () => {
    return (
        <div className='min-h-screen bg-base-200'>
            <h1 className="text-3xl font-bold text-center">Project Detail Information</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-24'>
                        <h1 className="text-3xl font-bold">Photography service  Website</h1>
                        <p className="py-6">
                            This website is Service provider website. <br /> <span className='text-xl font-bold'>Feature:</span><br /> 1.On this website, you can order any phone when you log in to this site. <br />
                            2. Service provide <br />
                            3. Clint can see service details <br />
                            4. clint can also add reviews about our services. <br />
                            4. clint add service <br />
                            5. Clint post, edit, delete reviews<br />
                            6. Technology: React, React Routing, TailwindCSS, DaisyUI, Firebase Authentication, Express, MongoDB, Heroku, React hook form, React query.</p>
                        <p className='font-bold mb-5'>For More Informetion Visit the website</p>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            <a href="https://photography-22902.web.app/"><button className="btn bg-indigo-500	text-white">Live Site</button></a>
                            <a href="https://github.com/ProgrammerBayzid/photography-clint"><button className="btn bg-indigo-500	text-white">Clint Side Code</button></a>
                            <a href="https://github.com/ProgrammerBayzid/photography-server"><button className="btn bg-indigo-500	text-white">Server side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Photography
