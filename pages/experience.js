import { NavBar, FootBar, CustomHead } from "."

function ExperienceSection() {
    return (
        <div className="experienceContainer">
            <div className="entry left">
                <div className="entryWide">
                    <h2 className="entryCompany">Profit Decoder</h2>
                    <h4 className="entryDate">October 2021 - Present</h4>
                </div>
                <h3 className="entryPosition">Full Stack Developer</h3>
                <h4 className="entryDateMobile">October 2021 - Present</h4>
                <p className="entryDescription">
                    As a full stack developer at Profit Decoder I designed a backend database with an optimization for scalability while minimizing redundancy. 
                    I also developed RESTful API endpoints and implemented code that added front-end functioning using HTML, CSS, and JavaScript.
                </p>
            </div>
            <div className="entry right">
                <div className="entryWide">
                    <h2 className="entryCompany">Mott Haven Fridge</h2>
                    <h4 className="entryDate">June 2021 - August 2021</h4>
                </div>
                <h3 className="entryPosition">Tech Management Intern</h3>
                <h4 className="entryDateMobile">June 2021 - August 2021</h4>
                <p className="entryDescription">
                    As a tech management intern at Mott Haven Fridge I maintained a database of over 500 volunteers using Airtable. In addition to designing new 
                    features that improved the volunteering experience, I also reduced the time needed for maintenance tasks through automation using JavaScript 
                    and REST API. My other duties included managing and improving the software used by various other teams within the organization in addition 
                    to communicating with all teams to locate and solve any tech related issues.
                </p>
            </div>
            <div className="entry left">
                <div className="entryWide">
                    <h2 className="entryCompany">SCS Beacon Program</h2>
                    <h4 className="entryDate">June 2018 - August 2018</h4>
                </div>
                <h3 className="entryPosition">Youth Worker</h3>
                <h4 className="entryDateMobile">June 2018 - August 2018</h4>
                <p className="entryDescription">
                    As a youth worker at the sunnyside community service beacon program at I.S.5 I helped supervise a class of over 20 students. My 
                    duties included working in a team alongside the other youth workers to create a positive and safe environment for the students to learn and 
                    grow in. 
                </p>
            </div>
            <div className="entry right">
                <div className="entryWide">
                    <h2 className="entryCompany">New Life Fellowship</h2>
                    <h4 className="entryDate">September 2015 - June 2017</h4>
                </div>
                <h3 className="entryPosition">Tutor</h3>
                <h4 className="entryDateMobile">September 2015 - June 2017</h4>
                <p className="entryDescription">
                    As a tutor at the daycare program in the New Life Fellowship church I helped students improve their reading, writing, and math skills
                    through personalized learning. I also aided in setting up holiday events and provided supervision to ensure a fun and stress-free learning environment.
                </p>
            </div>
        </div>
    )
}

export default function ExperiencePage() {
    return (
        <>
            <CustomHead name="Experience" />
            <div className='container'>
                <NavBar />
                <ExperienceSection />
                <FootBar />
            </div>
        </>
    )
}