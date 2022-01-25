import '../styles/Projects.css';
import { useState,useEffect } from 'react';
// import data from '../data/projects.js';

const Projects = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://portfolio-server-express.herokuapp.com/');
            const json = await response.json();
            setProjects(json);
        }
        fetchData();
    }, []);

    const renderCodeLinks = (codeLinks) => {
        if (codeLinks[1]) {
            return (
                <div>The client code can be found <a href={codeLinks[0]} target="_blank" rel="noopener noreferrer">here. </a>
                      and the server code can be found <a href={codeLinks[1]} target="_blank" rel="noopener noreferrer">here.</a>
                </div>
            )
        }
        return (
            <div>The code can be found <a href={codeLinks[0]} rel="noopener noreferrer">here.</a></div>
        )    
    }

    return (
        <div className="projects">
            <div className="projects-title" >Projects</div>
            <div className="projects-container">
                { projects && projects.map(project => {
                        return (
                            <div className="project" key={project._id}>
                                <div className="project-name">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">{project.name}</a>  
                                </div>  
                                <div className="project-image">
                                    <img src={project.imageUrl} alt={project.name} />
                                </div>
                                <div className="project-description">
                                    <div>{project.description}</div>
                                </div>
                                <div className="project-links">{renderCodeLinks(project.github)}</div>        
                                <div className="project-live">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live demo</a>    
                                </div>    
                            </div>    
                        )
                    })
                }
                
            </div>   
        </div>
    )           

}

export default Projects;