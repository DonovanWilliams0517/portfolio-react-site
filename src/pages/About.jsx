function Home() {
    return (
        <div className="container about">
            <h1>About Me</h1>
            <p>
                My name is <strong>Donovan</strong>, an inspring frontend developer that has developed my skills through online courses, independent study, and practical projects.
                I'm comfortable with creating clean, responsive, and interactive web apps.
            </p>
            <p>
                I work with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
                and <strong>React</strong>, I'm familiar with using APIs, and async JavaScript. I also have some experience with tools like Vite, Git, and Bootstrap.
                I’m currently seeking a frontend development internship where I can contribute and continue to grow my skills and learn whatever necessary.
            </p>
           

            <h2>My Skills</h2>
            <div className="skills-grid">
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    <p>Git</p>
                </div>
            </div>
        </div>
    );
}

export default Home
  