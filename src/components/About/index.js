import selfPortrait from '../../assets/self-portrait.png';
function About() {
    return (
        <div>
            <div className="title">
                About Me
            </div>
            <div className="photo">
                <img src={selfPortrait} alt="self-portrait" />
            </div>
            <div className="paragraph">
          I am a newly certified full stack web developer. I have always had an interest in technology and learning new things. In high school my greatest passion was for my engineering class where I built automated systems, worked with CAD programs, and learned how to create a functional project with a team. After high school, I initially pursued software engineering at Arizona State, but had to come home due to monetary constraints. I continued to pursue my education through Crafton Hills Community College where I acquired my associates degree in Psychology, and moved on to Cal State San Bernardino to pursue Bio-psychology with an emphasis in drug studies. After graduating, I rekindled my love of projects and technology through projects at home, including creating a 3d printer lab in my home and building a robotic arm from scratch after buying schematics for the design. I decided in November of 2021 that I would like to further pursue software and signed up for UCR's Full Stack Web Developer Bootcamp. After 26 weeks of intense study, I have learned an engineering mindset - one where I never stop learning and am always thinking of the most optimal and pragmatic means of achieving the minimum viable product for a project. Thank you for visiting my portfolio!
            </div>
        </div>
    )
}

export default About;