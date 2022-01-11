import { React, useState, useEffect } from 'react';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://portfolio-server-express.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="projects-container">
            <h2 className="projects-container__title">Projects</h2>
            {isLoading ? (
                <div className="loader">
                    <div className="loader__text">Loading...</div>
                </div>
            ) : (
                <div className="projects">
                    {projects.map(project => (
                        <div className="project" key={project._id}>
                            <div className="project__name">{project.name}</div>
                            <div className="project__description">{project.description}</div>
                            <div className="project__code__link">
                                <a href={project.github[0]} target="_blank" rel="noopener noreferrer">
                                Code
                                </a>
                                {project.github[1] && <a href={project.github[1]} target="_blank" rel="noopener noreferrer">Backend code</a>}
                            </div> 
                            <div className="project__live__link">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">  
                                Live Demo
                                </a>    
                                </div>
                         </div>
                    ))}
                 </div>        
            ) 
                    } 
        </div>

    )
}

export default ProjectsContainer;