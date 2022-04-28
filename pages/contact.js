import { NavBar, FootBar, CustomHead } from "."
import Image from 'next/image'

function ContactSection() {
    return (
        <div className="contactContainer">
            <div className="contactCard">
                <h1 className="contactName">Email</h1>
                <div className="contactInfo">
                    <h1 className="contactLink">tislam35@gmail.com</h1>
                    <a href="mailto:tislam35@gmail.com">
                        <button className="contactButton" style={{ position: `relative` }}>
                            <Image className="contactImg" src="/images/external-link.svg" height="20%" width="20%" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="contactCard">
                <h1 className="contactName">Github</h1>
                <div className="contactInfo">
                    <h1 className="contactLink">https://github.com/tislam35</h1>
                    <a href="https://github.com/tislam35">
                        <button className="contactButton" style={{ position: `relative` }}>
                            <Image className="contactImg" src="/images/external-link.svg" height="20%" width="20%" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="contactCard">
                <h1 className="contactName">LinkedIn</h1>
                <div className="contactInfo">
                    <h1 className="contactLink">https://www.linkedin.com/in/tislam35</h1>
                    <a href="https://www.linkedin.com/in/tislam35">
                        <button className="contactButton" style={{ position: `relative` }}>
                            <Image className="contactImg" src="/images/external-link.svg" height="20%" width="20%" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function ContactPage() {
    return (
        <>
            <CustomHead name="Contact Me" />
            <div className='container'>
                <NavBar />
                <ContactSection />
                <FootBar />
            </div>
        </>
    )
}