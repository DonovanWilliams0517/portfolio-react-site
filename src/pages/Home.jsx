import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
        <div className="home">
            <h1>Donovan Williams</h1>
            <h2>Inspiring Frontend Developer</h2>

            <p>
                I enjoy building clean, responsive web apps using HTML, CSS, JavaScript, and React.
                This portfolio showcases projects I've built while learning and growing as a developer.
            </p>

            <Link to="/projects" className="btn">
                View My Projects
            </Link>
            </div>
        </div>
    )
}

export default Home
