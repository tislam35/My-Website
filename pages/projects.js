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
            description: "This web-app was designed using ...",
            source: "/images/clockwisdomimg.png",
            url: "https://github.com/tislam35/Clock-Wisdom"
        }
    );

    projects.push(
        {
            projectName: "Team Me",
            description: "This desktop application was developed using ...",
            source: "/images/teammeimg.png",
            url: "https://github.com/tislam35/TeamMe"
        }
    );

    projects.push(
        {
            projectName: "Currency Converter",
            description: "This android application was developed using ...",
            source: "/images/currencyconverterimg.png",
            url: "https://github.com/tislam35/Currency_Converter"
        }
    );

    projects.push(
        {
            projectName: "Galactic Conquest",
            description: "This game was developed using ...",
            source: "/images/inProgress.png",
            url: "https://github.com/tislam35/Simple_Java_Game"
        }
    );

    projects.push(
        {
            projectName: "Air Quality Visualization",
            description: "This project models the progression of air pollution throughout New York using ...",
            source: "/images/inProgress.png",
            url: "https://github.com/tislam35/Human-Perception-Project"
        }
    );

    projects.push(
        {
            projectName: "Climate Change Solutions",
            description: "This project models the ARIMA based forecast of air pollution and offers several solutions with\
                        models visualizing the effectiveness of each ...",
            source: "/images/ccsimg.png",
            url: "https://github.com/tislam35/Climate_Change_Solutions"
        }
    );

    projects.push(
        {
            projectName: "This Website!",
            description: "I developed this website using React, NextJS, JavaScript, HTML, and CSS ...",
            source: "/images/thissiteimg.png",
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
        let url = document.getElementById("projectLink");

        //populating components with info for the selected project
        projectName.textContent = projects[index].projectName;
        description.textContent = projects[index].description;
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