import '../styles/Skills.css';
import { BsKanban } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { DiScrum } from 'react-icons/di';
import { GrNode } from 'react-icons/gr';
import { SiExpress, SiMongodb, SiPostgresql, SiReact, SiRedux, SiDocker, SiWebpack, SiAmazonaws, SiHeroku, SiNetlify, SiMocha, SiJest } from 'react-icons/si';
import { BiGitPullRequest } from 'react-icons/bi';
import { Icon } from '@iconify/react';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-container__header">Tech & Skills</div>    
            <div className="skills-container__icons-container">
                <div className="skills-container__icons-container__icon-container">
                    <IoLogoJavascript className="icon"/>
                    <div>JavaScript</div>
                </div>  
                <div className="skills-container__icons-container__icon-container">
                    <GrNode className="icon"/>
                    <div>Node.js</div>
                </div> 
                <div className="skills-container__icons-container__icon-container">
                    <SiReact className="icon"/>
                    <div>React</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <SiRedux className="icon"/>
                    <div>Redux</div>
                </div> 
                <div className="skills-container__icons-container__icon-container">
                    <SiExpress className="icon"/>
                    <div>Express.js</div>
                </div> 
                <div className="skills-container__icons-container__icon-container">
                    <SiMongodb className="icon"/>
                    <div>MongoDB</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <Icon icon="simple-icons:graphql" className="icon"/>
                    <div>GraphQL</div>
                </div>    
                <div className="skills-container__icons-container__icon-container">
                    <SiPostgresql className="icon"/>
                    <div>PostgreSQL</div>
                </div> 
                <div className="skills-container__icons-container__icon-container">
                    <SiDocker className="icon"/>
                    <div>Docker</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <SiWebpack className="icon"/>
                    <div>Webpack</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <SiHeroku className="icon"/>
                    <div>Heroku</div>
                </div>  
                <div className="skills-container__icons-container__icon-container">
                    <SiNetlify className="icon"/>
                    <div>Netlify</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <SiMocha className="icon"/>
                    <div>Mocha</div>
                </div>     
                <div className="skills-container__icons-container__icon-container">
                    <SiJest className="icon"/>
                    <div>Jest</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <SiAmazonaws className="icon"/>
                    <div>AWS</div>
                </div>
                <div className="skills-container__icons-container__icon-container">
                    <DiScrum className="icon"/>
                    <div>Scrum</div>
                </div> 
                <div className="skills-container__icons-container__icon-container">
                    <BsKanban className="icon"/>
                    <div>Kanban</div>
                </div>   
                <div className="skills-container__icons-container__icon-container">
                    <BiGitPullRequest className="icon"/>
                    <div>Git</div>
                </div>                   
            </div>

            
        </div>
    )
}

export default Skills;