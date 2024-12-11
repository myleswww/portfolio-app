import React from "react";

const Experience = () => {
    return (
        <div>
            <div id ="experience" className="experience">
                <div className= "d-flex justify-content-center my-5">
                    <h1>Experience</h1>
                </div>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2019</h3>
                        <p>Attended Ivy Tech Community College</p>
                        <p>- Associates Degree in Computer Science <br></br>
                            - Awards: Dean's List Spring 2018, Fall 2018, and Spring 2019<br></br>
                            - Relevant Coursework: Java Development, Data Structures, Discrete Logic for Computers, Website
                            Development and Design, Database Systems, Network Communications, Hardware/Software Support
                        </p>
                    </div>
                </div>
                 {/*--*/}
                 <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2019</h3>
                        <p>Operations Supervisor for UPS</p>
                        <p>
                            - Handled audits on employees, leading to decreased rate of lost parcels<br></br>
                            - Helped test smartphone rollout for facility with the QA team and development team, resulting in every
                            - UPS facility introducing a smartphone system.
                        </p>
                    </div>
                </div>
                {/*--*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>Attended Butler University</p>
                        <p>
                            - Bachelor’s Degree in Computer Science<br></br>
                            - Member of Upsilon Pi Epsilon<br></br> President of the CRM club 2020-2021<br></br>
                            - Relevant coursework: Theory of Computation, Network Systems, Parallel Algorithms, Software
                            - Engineering<br></br>
                            - Related Projects: Developed mobile learning tool for children on the Autistic Spectrum.
                            
                        </p>
                    </div>
                </div>
                 {/*--*/}
                 <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>IT Technician Shift Lead for Butler University</p>
                        <p>Awards: Best New Student Employee 2019<br></br>
                            - Trained 10 new Technicians which resulted in better customer support response time<br></br>
                            - Managed data backup and recovery for 500+ employees<br></br>
                            - Manage and coordinate a team of 2-3 student employees daily, resulting in better team performance<br></br>
                        </p>
                    </div>
                </div>
                 {/*--*/}
                 <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2020-August 2020</h3>
                        <p>IT Developer Intern for Butler University</p>
                        <p>- Virtual Reality discovery for future projects, which led to better support for virtual classes<br></br>
                            - Developed event scanning project using Python and REST API for safer check-in during the Covid-19
                            pandemic
                        </p>
                    </div>
                </div>
                {/*--*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>November 2021-Febuary 2022</h3>
                        <p>IT Technician</p>
                        <p>- Traveled extensively across 20+ company locations statewide to diagnose and resolve hardware issues including printers, computers, and network connectivity issues
                            <br></br>- Played a key role in enhancing security by assisting in the deployment of two-factor authentication for company devices
                        </p>
                    </div>
                </div>
                {/*--*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Febuary 2022-Present</h3>
                        <p>Integration Developer</p>
                        <p>-Lead developer for a business-critical integration application, automating product data imports to enable e-commerce platform functionality, overseeing the complete development lifecycle from planning to production while ensuring best practices in documentation, code, and deployment
                            <br></br>- Built and managed back-end API integrations, ensuring seamless data flow and system interoperability, alongside handling database management and both unit and user acceptance testing with stakeholders
                            <br></br>- Implemented robust data validation using regular expressions and exception-handling best practices, reducing error rates
                            <br></br>- Utilized data hashing techniques in conjunction with Oauth 2.0 to secure sensitive information during data exchanges
                            <br></br>- Pioneered the use of Imagick for visual image comparison, automating the process of product image verification, greatly improving quality control
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
