import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
    return (
        <section className="mt-32">
            <div className="mb-7">
                <h5 className="text-center text-3xl  font-bold">What Skills i Have</h5>
                <h2 className="text-center text-3xl font-bold">My Experience</h2>
            </div>

            <div className="container experience_container">
                <div className="experience_frontend bg-base-100 shadow-xl">
                    <h3 className="text-2xl font-bold">Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>HTML5, CSS3</h4>
                                <small className="text-light">Expertise</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Expertise</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Expertise</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className="text-light">Expertise</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Expertise</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend bg-base-100 shadow-xl">
                    <h3 className="text-2xl font-bold">Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Node.Js</h4>
                                <small className="text-light">Familiar</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Express.Js</h4>
                                <small className="text-light">Comportable</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Comportable</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Rest API</h4>
                                <small className="text-light">Comportable</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Payment Getway</h4>
                                <small className="text-light">Familiar</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
