import React from 'react'
import CV from "../../../assets/MDBayzid Islam Nishat_Resume.pdf";

const Resume = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn bg-indigo-500	text-white">
                Download CV
            </a>

        </div>
    )
}

export default Resume
