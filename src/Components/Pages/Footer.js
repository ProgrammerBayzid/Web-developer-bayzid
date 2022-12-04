import React from 'react'
import { Link } from 'react-router-dom'
import b from "../../assets/img/b.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100 shadow-xl text-primary-content mt-32 mb-12">
            <div>
                <img className='w-28 rounded-full' src={b} alt="" srcset="" />
                <p className="font-bold text-black">
                    MD: Bayzid Islam Nishat <br />MERN Stack Developer
                </p>
                <p className='text-black'>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100015109183358"> <FaFacebook></FaFacebook></a>
                    <a href="https://www.linkedin.com/in/md-bayzid-islam-nishat-a40622259/"><BsLinkedin></BsLinkedin></a>
                    <a href="https://github.com/ProgrammerBayzid"><FaGithub></FaGithub></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
