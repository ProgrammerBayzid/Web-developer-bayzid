import React from 'react'
import phone from '../../assets/cardImg/phone.png'

const ResellPhone = () => {
    return (

        <div className='min-h-screen bg-base-200'>
            <h1 className="text-3xl font-bold text-center mb-10">Project Detail Information</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={phone} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-24'>
                        <h1 className="text-3xl font-bold">Resell Product Website</h1>
                        <p className="py-6">
                            This website is Second hand phone selling website. <br /> <span className='text-xl font-bold'>Feature:</span><br /> 1.On this website, you can order any phone when you log in to this site. <br />
                            2. Here have a client, seller and an admin dashboard to control website content. <br />
                            3. For the admin role, I implement JWT for verification. <br />
                            4. clint can also add reviews about our services. <br />
                            5. Seller can add product and delete product <br />
                            6. Admin can add make a use admin, can delete a user and also can verify a seller  <br />
                            7. Technology: React, React Routing, TailwindCSS, DaisyUI, Firebase Authentication, Express, MongoDB, Heroku, React hook form, React query.</p>
                        <p className='font-bold mb-5'>For More Informetion Visit the website</p>
                        <div className='grid lg:grid-cols-3 gap-5'>
                            <a href="https://phones-9c9a0.web.app/"><button className="btn bg-indigo-500	text-white">Live Site</button></a>
                            <a href="https://github.com/ProgrammerBayzid/resel-product"><button className="btn bg-indigo-500	text-white">Clint Side Code</button></a>
                            <a href="https://github.com/ProgrammerBayzid/resel-product-server"><button className="btn bg-indigo-500	text-white">Server side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResellPhone
