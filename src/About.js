import { BsEmojiSmileUpsideDown, BsEmojiSmile } from 'react-icons/bs';
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
            What helped me succeed was my degree in Linguistics and its focus on syntax and computational linguistics. Additionally, my love for problem-solving and my determination to become a professional developer helped me thrive.
            </p>
            <br/>
            <p>
            Three months and over 500 coding hours later, I am ready to share my favourite projects, build on top of them and learn new technologies. 
            </p>
            <br/>
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