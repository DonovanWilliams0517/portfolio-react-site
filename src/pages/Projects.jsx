

const projects = [
    {
        title: "Weather App",
        description: "A responsive app that fetches real-time weather data using the OpenWeather API.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/DonovanWilliams0517/weather-app",
        demo: "#"
    },
    {
        title: "Developer Card Filter",
        description: "Search and filter developers based on name or skill with real-time DOM manipulation.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/DonovanWilliams0517/dev-directory.git",
        demo: "#",
    },
    {
        title: "Quote Generator",
        description: "A simple web app that displays a random quote with the click of a button",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/DonovanWilliams0517/quote-generator",
        demo: "#",
    },

    {
        title: "Todo List",
        description: "Create a todo list. Filter between completed and active task and save task locally.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/DonovanWilliams0517/todo-app",
        demo: "#",
    }
]

function Projects() {
    return (
        <div className="conatiner">
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tech.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        <div className="links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {project.demo !== "#" && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
    )
}

export default Projects
  