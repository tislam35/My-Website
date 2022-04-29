import { NavBar, FootBar, CustomHead } from "."

function ExperienceSection() {
    return (
        <div className="experienceContainer">
            <div className="entry left">
                <div className="entryWide">
                    <h2 className="entryCompany">Profit Decoder</h2>
                    <h4 className="entryDate">October 2021 - Present</h4>
                </div>
                <h3 className="entryPosition">Software Engineer</h3>
                <h4 className="entryDateMobile">October 2021 - Present</h4>
                <p className="entryDescription">
                    As a software engineer at Profit Decoder I ...
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
                    As a tech management intern at Mott Haven Fridge I ...
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
                    As a youth worker at the sunnyside community service beacon program at I.S.5 I ...
                </p>
            </div>
            <div className="entry right">
                <div className="entryWide">
                    <h2 className="entryCompany">New Life Fellowship</h2>
                    <h4 className="entryDate">September 2015 - June 2017</h4>
                </div>
                <h3 className="entryPosition">Tutor & Mentor</h3>
                <h4 className="entryDateMobile">September 2015 - June 2017</h4>
                <p className="entryDescription">
                    As a tutor at the daycare program in the New Life Fellowship church I ...
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