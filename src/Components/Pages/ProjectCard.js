import React from 'react'
import phone from '../../assets/cardImg/phone.png'
import doctor from '../../assets/cardImg/doctor.png'
import photo from '../../assets/cardImg/photo.png'
import car from '../../assets/cardImg/car.png'
import elarning from '../../assets/cardImg/elarning.png'
import { Link } from 'react-router-dom'

const ProjectCard = () => {

    const cards = [
        {
            image: phone,
            title: 'Resele Product ',
            id: 1,
        },
        {
            image: doctor,
            title: 'Doctor Portals ',
            id: 2,
        },
        {
            image: photo,
            title: 'Photography Service Provide',
            id: 3,
        },
        {
            image: car,
            title: 'Car Doctor',
            id: 4,
        },
        {
            image: elarning,
            title: 'E-learning',
            id: 5,
        },
    ]
    return (
        <div className='mt-32'>
            <div className='mb-10'>
                <h4 className='text-xl text-black font-bold text-center'>My Recent Work
                </h4>
                <h1 className='text-4xl text-center text-black'>Portfolio
                </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 '>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-80' src={phone} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Resele Product

                        </h2>
                        <div className="card-actions justify-end">
                            <Link to='/phone'>  <button className='btn bg-indigo-500	text-white'>Details Info</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-80' src={doctor} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Doctor Portals

                        </h2>
                        <div className="card-actions justify-end">
                            <Link to='/doctor'>  <button className='btn bg-indigo-500	text-white '>Details Info</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-80' src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            Photography Service Provide
                        </h2>
                        <div className="card-actions justify-end">
                            <Link to='/photo'>  <button className='btn bg-indigo-500	text-white'>Details Info</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-80' src={car} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Doctor
                        </h2>
                        <div className="card-actions justify-end">
                            <Link to='/car'>  <button className='btn bg-indigo-500	text-white'>Details Info</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-80' src={elarning} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            E-learning
                        </h2>
                        <div className="card-actions justify-end">
                            <Link to='/elarning'>  <button className='btn bg-indigo-500	text-white'>Details Info</button></Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectCard
