import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

//header
export function CustomHead(props) {
    return (
        <Head>
            <title>
                {`Tohidul Islam - ${props.name}`}
            </title>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/images/site.webmanifest" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    )
}

//nav bar
export function NavBar() {
    return (
        <div className="navBar">
            <div id="info">
                <h1 id="name">{`Tohidul Islam`}</h1>
                <h4 id="description">{`Software Engineer & Data Science Enthusiast`}</h4>
            </div>
            <ul id="links">
                <li><Link href="/"><a className='linkItems'>About</a></Link></li>
                <li><Link href="skills"><a className='linkItems'>Skills</a></Link></li>
                <li><Link href="projects"><a className='linkItems'>Projects</a></Link></li>
                <li><Link href="experience"><a className='linkItems'>Experience</a></Link></li>
                <li><Link href="contact"><a className='linkItems'>Contact</a></Link></li>
            </ul>
        </div>
    )
}

//footer
export function FootBar() {
    return <div className="footBar" />
}

function AboutSection() {
    return (
        <div className="aboutContainer">
            <div id="imageContainer" style={{ position: 'relative' }}>
                <Image src="/images/profilev2.jpg" layout='fill' objectFit='cover' />
            </div>
            <div id="textContainer">
                <h2 id="title">About Me</h2><br></br>
                <h4 className="summary">
                    Hello! My name is Tohidul Islam and I am a software engineer with a bachelor's of science in Computer Science.
                    I graduated from The City College of New York in 2022 but have been programming since my sophomore year of 
                    high school back in 2014. I love learning about new technologies and skills whenever possible in order to
                    ensure that my work is efficient. I also value making organized and readable code so that my work can be easily
                    followed and seamlessly implemented by others.
                </h4>
                <h4 className="summary">
                    My passion for programming has driven me to constantly work on projects that expand on my technical skills.
                    Some of the programming languages that I am proficient in are Java, Python, JavaScript, C++, and SQL, but I am always 
                    looking to learn new languages when possible. Whenever I encounter something new or unfamiliar I make it my goal
                    to learn about and understand the task at hand in order to minimize mistakes and errors.
                </h4>
                <h4 className="summary">
                    Recently I have also developed a strong interest in data science. Many of my past academic courses and projects have revolved around 
                    mathematical optimization, modelling complex systems, and numerical computations which opened my eyes to the importance of being 
                    able to analyze data for trends and predictions in any environment. Now I enjoy analyzing and modelling data in any project that I
                    work on for the potential of optimization and efficiency.
                </h4>
                <h4 className="summary">
                    When I'm not coding, analyzing data, or learning new technical skills in my free time, I like to unwind by playing video games with
                    friends or going to the gym. When an opportunity presents itself I also love watching nature documentaries and sci-fi shows.
                </h4>
            </div>
        </div>
    )
}

export default function AboutPage() {
    return (
        <>
            <CustomHead name="About Me" />
            <div className='container'>
                <NavBar />
                <AboutSection />
                <FootBar />
            </div>
        </>
    )
}