import { NavBar, FootBar, CustomHead } from "."
import Image from 'next/image'

function SkillsSection() {
    return (
        <div className="skillsContainer">
            <div id="progLangContainer">
                <h2 className="skillType">Programming Languages</h2>
                <div className="grid">
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Java</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Python</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">JavaScript</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">C</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">C++</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">SQL</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">R</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Scheme</h1>
                    </div>
                </div>
            </div>
            <div id="softwareContainer">
                <h2 className="skillType">Software Applications</h2>
                <div className="grid">
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">PostgreSQL</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">MySQL</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">NextJS</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">NodeJS</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">React</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Gatsby</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Flask</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Airtable</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Xano</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Twilio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">SendGrid</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Visual Studio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Android Studio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">RStudio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">DrRacket</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Matlab</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Tableau</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Plotly</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Quartus</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Webflow</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Microsoft Word</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Microsoft Excel</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/inProgress.png" layout='fill' objectFit='cover' />
                        </div>
                        <h1 className="label">Microsoft PowerPoint</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SkillsPage() {
    return (
        <>
            <CustomHead name="Skills" />
            <div className='container'>
                <NavBar />
                <SkillsSection />
                <FootBar />
            </div>
        </>
    )
}