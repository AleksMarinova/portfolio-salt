import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-container__header">About me</div>
            <div className="about-container__content">
                <div className="about-container__content__text">
                <span className="about-container__content__text__first-letter">I</span>n September 2021,  I was chosen among over 1000 applicants 
                to become part of School of applied technology's intensive coding Bootcamp. 
                Together with 30 other talented hobby coders, 
                I dived into Node, Express, React, Redux, MongoDB, PostgreSQL, 
                and other building blocks of the modern web.
                </div>
                <div className="about-container__content__text">
                <span className="about-container__content__text__first-letter">M</span>y degree in Linguistics and its focus on syntax and computational practices 
                played a major role in my success. 
                Additionally, my love for problem-solving and my determination 
                to become a professional developer helped me thrive.
                </div>
                <div className="about-container__content__text">
                <span className="about-container__content__text__first-letter">T</span>hree months and over 500 coding hours later,
                I am looking forward to joining a new team and contributing to my new company's growth. 
                </div>
            </div>
        </div>
    )
}

export default About;