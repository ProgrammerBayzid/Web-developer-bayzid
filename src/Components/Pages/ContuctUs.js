import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const ContuctUs = () => {
    return (
        <section className='mt-32'>
            <div className='mb-10'>
                <h4 className='text-xl text-black font-bold text-center'> Contact Us</h4>
                <h1 className='text-4xl text-center text-black'>Stay connected with us</h1>
            </div>
            <div className='grid lg:grid-cols-2 '>

                <div>
                    <div className="grid gap-5">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <MdOutlineEmail className="contact_icon" />
                                <h2 className="card-title">Email</h2>
                                <h5>mdbayzid2622002@gmail.com</h5>
                                <div className="card-actions justify-end">
                                    <a
                                        className="btn bg-indigo-500	text-white"
                                        href="mailto:mdbayzid2622002@gmail.com"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Send a Message
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <RiMessengerLine className="contact_icon" />
                                <h2 className="card-title">Messanger</h2>
                                <h5>MD: Bayzid</h5>
                                <div className="card-actions justify-end">
                                    <a
                                        className="btn bg-indigo-500	text-white"
                                        href="" rel="noreferrer" target="_blank"
                                    >
                                        Send a Message
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <BsWhatsapp className="contact_icon" />
                                <h2 className="card-title">Whatsapp</h2>
                                <h5>017******40</h5>
                                <div className="card-actions justify-end">
                                    <a
                                        className="btn bg-indigo-500	text-white"
                                        href="https://wa.me/+880167645383"
                                        rel="noreferrer"
                                        target="_blank"                                >
                                        Send a Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-base-100 shadow-xl rounded  py-16'>

                    <div>

                        <div className="card-body lg:w-1/2 flex mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="Type Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black">Message</span>
                                </label>
                                <textarea type='text' name='message' className="textarea" placeholder="Type Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-indigo-500	text-white">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </ div>
        </section>
    )
}

export default ContuctUs
