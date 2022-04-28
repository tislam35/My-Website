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
                <p id="summary">
                    text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                </p>
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