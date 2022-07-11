import resume from '../../assets/Profile.pdf';

function Resume() {
    return (
        <div className="resumeForm">
            <p className="subHead">Resume</p>
            <p> Download resume <a href={resume} download>here</a> </p>
            <p className="paragraph"> Front-End Proficiencies</p>
            <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <p className="paragraph"> Back-End Proficiencies</p>
            <ul className="list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}

export default Resume;