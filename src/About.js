import { BsEmojiSmileUpsideDown, BsEmojiSmile, BsKanban } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { DiScrum } from 'react-icons/di';
import { GrNode } from 'react-icons/gr';
import { SiExpress, SiMongodb, SiPostgresql, SiReact, SiRedux, SiDocker, SiWebpack, SiAmazonaws, SiHeroku, SiNetlify, SiMocha, SiJest } from 'react-icons/si';
import {BiGitPullRequest} from 'react-icons/bi';
import { Icon } from '@iconify/react';
import { useState } from 'react';

 const About = () => {
     const [isHovered, setIsHovered] = useState(false);

    return (
      
        <div className="about">
            <h2>About me</h2>
            <p>
            In September 2021,  I was chosen among over 1000 applicants to become part of School of applied technology's intensive coding Bootcamp. Together with 30 other talented hobby coders, I dived into Node, Express, React, Redux, MongoDB, PostgreSQL, and other building blocks of the modern web.
            </p>
            <br />
            <p>
            My degree in Linguistics and its focus on syntax and computational practices played a major role in my success. Additionally, my love for problem-solving and my determination to become a professional developer helped me thrive.
            </p>
            <br/>
            <p>
            Three months and over 500 coding hours later, I am looking forward to joining a new team and contributing to my new company's growth. 
            </p>
            <br/>
            <div className="about-icons-header">Tech and skills </div>
            <div className="about-icons">
                <div className="about-icon">    
                    <IoLogoJavascript className="icon"/>
                    <div>JavaScript</div>
                </div>
                <div className="about-icon">
                    <SiReact className="icon" />
                    <div>React</div>
                </div>   
                <div className="about-icon">
                     <SiRedux className="icon" />
                    <div>Redux</div>
                </div>
                <div className="about-icon">
                    <GrNode className="icon"/>
                    <div>Node</div>
                </div>
                <div className="about-icon">
                    <SiExpress className="icon" />
                    <div>Express</div>
                </div>
                <div className="about-icon">
                    <Icon icon="simple-icons:graphql" className="icon"/>
                    <div>GraphQL</div>
                </div>
                <div className="about-icon">
                    <SiMongodb className="icon"/>
                    <div>MongoDB</div>
                </div>
                <div className="about-icon">
                    <SiPostgresql className="icon"/>
                    <div>PostgreSQL</div>
                    </div>
                <div className="about-icon">
                    <BiGitPullRequest className="icon"/>
                    <div>Git</div>
                </div>  
                <div className="about-icon">
                    <SiDocker className="icon"/>
                    <div>Docker</div>
                </div>  
                <div className="about-icon">
                    <SiWebpack className="icon"/>
                    <div>Webpack</div>
                </div>
                <div className="about-icon">
                    <SiAmazonaws className="icon"/>
                    <div>AWS</div>
                </div>
                <div className="about-icon">
                    <SiHeroku className="icon"/>
                    <div>Heroku</div>
                </div>
                <div className="about-icon">
                    <SiNetlify className="icon"/>
                    <div>Netlify</div>
                </div> 
                <div className="about-icon">
                    <SiMocha className="icon"/>
                    <div>Mocha</div>
                </div> 
                <div className="about-icon">
                    <SiJest className="icon"/>
                    <div>Jest</div>
                </div>
                <div className="about-icon">
                    <BsKanban className="icon"/>
                    <div>Kanban</div>
                </div>  
                <div className="about-icon">
                    <DiScrum className="icon"/>
                    <div>Scrum</div>
                </div>        
            </div>
            <p>
            Check out my GitHub and connect with me on LinkedIn.
            </p>
            <br/>
            <p>
            Thank you for visiting my corner of the interwebs!{" "}
            <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            >
            {
                isHovered ? <BsEmojiSmileUpsideDown className="about__icon" /> : <BsEmojiSmile className="about__icon" />
            }
            </span>
            </p>
        </div>
       
    );
}

export default About;