import { React, useState, useEffect } from 'react';
import data from './projects';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setProjects(data);
        setIsLoading(false);
        // fetch('https://portfolio-server-express.herokuapp.com/')
        //     .then(response => response.json())
        //     .then(data => {
        //         setProjects(data);
        //         setIsLoading(false);
        //     });
    }, []);

    const renderProject = (arr) => {
        if (arr.github[1]){
            return <div className="project-links">You can check out the client code 
            <a href={arr.github[0]} target="_blank" rel="noopener noreferrer"> here </a> 
            and the server code 
            <a href={arr.github[1]} target="_blank" rel="noopener noreferrer"> here</a>.
            </div>
        }
        return <div className="project-links">You can check out the code <a href={arr.github[0]}>here</a>.</div>
    }

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
                            <div className="project__image">
                                <a href = {project.live} target="_blank" rel="noopener noreferrer">
                                <img src={project.imageUrl} alt={project.name} />
                                </a>
                            </div>
                            <div className="project__description">{project.description}</div>
                            <br />
                            {
                                project.github ? renderProject(project) : null
                            }
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