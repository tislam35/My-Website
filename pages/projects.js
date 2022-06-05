import { NavBar, FootBar, CustomHead } from "."
import { useState, useEffect } from 'react';
import Image from 'next/image'

function ProjectsSection() {

    //array that will contain all of my projects
    let projects = [];

    //populate the projects array with objects containing project info
    projects.push(
        {
            projectName: "Clock Wisdom",
            description: "This web-app allows organizations to easily manage all their employees by providing a simple and effective UI \
            for keeping track of clock-in and clock-out times, sick days, hourly pay, hours worked, and length of lunch breaks. The app also \
            features a system for sick day requests and provides a summary of each worker's timeliness, simplifying any performance review.",
            source: "/images/clockwisdomimg.png",
            languages: "JavaScript, Python, CSS, HTML",
            software: "React, Flask, SQLAlchemy",
            url: "https://github.com/tislam35/Clock-Wisdom"
        }
    );

    projects.push(
        {
            projectName: "Team Me",
            description: "This desktop application provides a simple social platform for all engineers and developers to find and collaborate with others \
            on meaningful and interesting projects. The application allows unregistered users to either browse existing groups and projects or \
            sign up for an account. Registered users can customize their own profile and apply to any open groups where they can schedule meetings, \
            compliment or report other members, and plan out projects.",
            source: "/images/teammeimg.png",
            languages: "Python",
            software: "PyQt5",
            url: "https://github.com/tislam35/TeamMe"
        }
    );

    projects.push(
        {
            projectName: "Currency Converter",
            description: "This android application provides a convenient way for users anywhere in the world to obtain an accurate and up-to-date approximation \
            of what their money is worth in over 30 different currency types. The application employs calls to modern currency exchange rate APIs for conversion calculations \
            and utilizes android's storage system for access to the last obtained rates when no service or internet is available.",
            source: "/images/currencyconverterimg.png",
            languages: "Java",
            software: "Android Studio",
            url: "https://github.com/tislam35/Currency_Converter"
        }
    );

    projects.push(
        {
            projectName: "Galactic Conquest",
            description: "This game features a spaceship travelling through space in a side-scroller format while collecting points and avoiding obstacles. \
            The games's pace and difficulty increases exponentially as the user progresses through each level.",
            source: "/images/gcimg.png",
            languages: "Java",
            software: "Netbeans",
            url: "https://github.com/tislam35/Simple_Java_Game"
        }
    );

    projects.push(
        {
            projectName: "Air Quality Visualization",
            description: "This project models the progression of air pollution throughout New York using recorded air data from monitoring \
            sources throughout the state. A focus on the fine particulate matter concentration (PM2.5) is made for analysis on air quality in \
            comparison to other socioeconoimic variables. ",
            source: "/images/aqvimg.png",
            languages: "Python",
            software: "Plotly Dash, Tableau",
            url: "https://github.com/tislam35/Human-Perception-Project"
        }
    );

    projects.push(
        {
            projectName: "Climate Change Solutions",
            description: "This project models the expected trajectory of global air pollution in comparison to \
            pollution forcasts with various solutions implemented. ARIMA based modelling with data dating back to 1965 is used to obtain reliable forcasts. \
            Visualizations are provided to demonstrate the effectiveness of each solution offered.",
            source: "/images/ccsimg.png",
            languages: "Python",
            software: "Plotly",
            url: "https://github.com/tislam35/Climate_Change_Solutions"
        }
    );

    projects.push(
        {
            projectName: "This Website",
            description: "I developed this website as a fun little side-project to further practice my JavaScript, HTML, and CSS skills while \
            getting more hands-on experience using React and NextJS. All components and UI designs seen here were made from scratch using Figma \
            to plan the layout before writing any code. As a work in progress, I plan on updating the color palette of the site to be more vibrant and welcoming; \
            in addition to improving UI designs and adding animations using TailwindCSS in the future.",
            source: "/images/thissiteimg.png",
            languages: "JavaScript, HTML, CSS",
            software: "React, NextJS, Figma, Vercel",
            url: "https://github.com/tislam35/My-Website"
        }
    );

    //index of inital project
    const [index, setIndex] = useState(0);

    //update displays after index changes
    useEffect(() => {
        //getting the components for radio buttons, project name, description, and link
        let navOptions = document.getElementsByClassName("projectNav");
        let projectName = document.getElementById("projectName");
        let description = document.getElementById("projectDescription");
        let languages = document.getElementById("projectLanguagesList");
        let software = document.getElementById("projectSoftwareList");
        let url = document.getElementById("projectLink");

        //populating components with info for the selected project
        projectName.textContent = projects[index].projectName;
        description.textContent = projects[index].description;
        languages.textContent = projects[index].languages;
        software.textContent = projects[index].software;
        url.href = projects[index].url;

        //checking the correct radio option
        navOptions[index].checked = true;
    }, [index]);

    return (
        <div className="projectsContainer">
            <div id="projects">
                <button id="leftButton" onClick={() => { (index == 0) ? setIndex(projects.length - 1) : setIndex(index - 1) }}>
                    <div id="left"></div>
                </button>
                <div id="projectImgContainer" style={{ position: `relative` }}>
                    <Image className="projectImg" src={projects[index].source} layout='fill' objectFit='' />
                </div>
                <button id="rightButton" onClick={() => { (index == projects.length - 1) ? setIndex(0) : setIndex(index + 1) }}>
                    <div id="right"></div>
                </button>
            </div>
            <div id="projectInfo">
                <div id="projectNavMenu">
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(0)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(1)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(2)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(3)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(4)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(5)}></input>
                    <input className="projectNav" type="radio" name="radio-group" onClick={() => setIndex(6)}></input>
                </div>
                <h2 id="projectName"></h2>
                <p id="projectDescription"></p>
                <h4 id="projectLanguages">Languages</h4>
                <p id="projectLanguagesList">None</p>
                <h4 id="projectSoftware">Software/Frameworks/Libraries</h4>
                <p id="projectSoftwareList">None</p>
                <a id="projectLink" href="https://www.google.com/">
                    <button className="link">Learn More</button>
                </a>
            </div>
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <>
            <CustomHead name="Projects" />
            <div className='container'>
                <NavBar />
                <ProjectsSection />
                <FootBar />
            </div>
        </>
    )
}