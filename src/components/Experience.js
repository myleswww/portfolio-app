import React from "react";

const Experience = () => {
    return (
        <div>
            <div className="experience">
                <div className= "d-flex justify-content-center my-5">
                    <h1>Experience</h1>
                </div>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2019</h3>
                        <p>Attended Ivy Tech Community College, 3.5GPA</p>
                        <p>Associates Degree in Computer Science.
                            Awards: Dean's List Spring 2018, Fall 2018, and Spring 2019.
                            Relevant Coursework: Java Development, Data Structures, Discrete Logic for Computers, Website
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
                            Handled audits on employees, leading to decreased rate of lost parcels;
                            Helped test smartphone rollout for facility with the QA team and development team, resulting in every
                            UPS facility introducing a smartphone system.
                        </p>
                    </div>
                </div>
                {/*--*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>Attended Butler University, 3.45GPA</p>
                        <p>
                            Bachelor’s Degree in Computer Science
                            Member of Upsilon Pi Epsilon, Predident of the CRM club 2020-2021.
                            Relevant coursework: Theory of Computation, Network Systems, Parallel Algorithms, Software
                            Engineering.
                            Related Projects: Developed mobile learning tool for children on the Autistic Spectrum.
                            
                        </p>
                    </div>
                </div>
                 {/*--*/}
                 <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2021</h3>
                        <p>IT Technician Shift Lead for Butler University</p>
                        <p>Awards: Best New Student Employee 2019.
                            Trained 10 new Technicians which resulted in better customer support response time.
                            Managed data backup and recovery for 500+ employees.
                            Manage and coordinate a team of 2-3 student employees daily, resulting in better team performance.
                        </p>
                    </div>
                </div>
                 {/*--*/}
                 <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2020-August 2020</h3>
                        <p>IT Developer Intern for Butler University</p>
                        <p>Virtual Reality discovery for future projects, which led to better support for virtual classes
                            Developed event scanning project using Python and REST API for safer check-in during the Covid-19
                            pandemic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
