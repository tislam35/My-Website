import { NavBar, FootBar, CustomHead } from "."
import Image from 'next/image'

//icons provided by devicon.dev: https://github.com/devicons/devicon/tree/master/icons
//and vectorlogozone: https://www.vectorlogo.zone/index.html?q=word

function SkillsSection() {
    return (
        <div className="skillsContainer">
            <div id="progLangContainer">
                <h2 className="skillType">Programming Languages</h2>
                <div className="grid">
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/java.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Java</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/python.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Python</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/javascript.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">JavaScript</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/c.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">C</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/cplusplus.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">C++</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/r.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">R</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/sql.png" height="60px" width="60px" />
                        </div>
                        <h1 className="label">SQL</h1>
                    </div>
                    <div className="progLangItems">
                        <div className="progLangImg" style={{ position: `relative` }}>
                            <Image className="progLangIcon" src="/images/scheme.svg" height="60px" width="60px" />
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
                            <Image src="/images/postgresql.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">PostgreSQL</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/mysql.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">MySQL</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/nextjs.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">NextJS</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/nodejs.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">NodeJS</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/react.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">React</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/gatsby.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Gatsby</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/flask.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Flask</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/airtable.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Airtable</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/xano.png" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Xano</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/twilio.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Twilio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/sendgrid.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">SendGrid</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/visualstudio.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Visual Studio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/androidstudio.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Android Studio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/rstudio.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">RStudio</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/racket.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">DrRacket</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/matlab.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Matlab</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/tableau.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Tableau</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/plotly.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Plotly</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/webflow.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Webflow</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/git.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Git</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/jira.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Jira</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/keap.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Keap</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/trello.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Trello</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/zapier.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Zapier</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/word.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Microsoft Word</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/excel.svg" height="60px" width="60px" />
                        </div>
                        <h1 className="label">Microsoft Excel</h1>
                    </div>
                    <div className="softwareItems">
                        <div className="softwareImg" style={{ position: `relative` }}>
                            <Image src="/images/powerpoint.svg" height="60px" width="60px" />
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