import React from 'react'
import doctor from '../../assets/cardImg/doctor.png'

const Doctor = () => {
    return (
        <div className='min-h-screen bg-base-200'>
            <h1 className="text-3xl font-bold text-center">Project Detail Information</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-24'>
                        <h1 className="text-3xl font-bold">Doctor Portal Website</h1>
                        <p className="py-6">
                            This website is Doctor Appoinment website. <br /> <span className='text-xl font-bold'>Feature:</span><br /> 1.On this website, you can order any phone when you log in to this site. <br />
                            2. Here have a client and an admin dashboard to control website content. <br />
                            3. For the admin role, I implement JWT for verification. <br />
                            4. clint can also add reviews about our services. <br />
                            4. clint can  Take  Appoinment. <br />
                            5. Admin can add a Doctor and delete Doctor <br />
                            6. Admin can add make a use admin, can delete a user  <br />
                            7. Technology: React, React Routing, TailwindCSS, DaisyUI, Firebase Authentication, Express, MongoDB, Heroku, React hook form, React query.</p>
                        <p className='font-bold mb-5'>For More Informetion Visit the website</p>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            <a href="https://doctor-bd2d5.web.app/"><button className="btn bg-indigo-500	text-white">Live Site</button></a>
                            <a href="https://github.com/ProgrammerBayzid/doctor-portal-clint"><button className="btn bg-indigo-500	text-white">Clint Side Code</button></a>
                            <a href="https://github.com/ProgrammerBayzid/doctor-portal-server"><button className="btn bg-indigo-500	text-white">Server side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Doctor
