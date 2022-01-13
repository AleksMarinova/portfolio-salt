import {VscGithubAlt} from 'react-icons/vsc';
import {RiLinkedinLine} from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="footer" >
            <a href='https://github.com/AleksMarinova' target="_blank" rel="noopener noreferrer">
                <VscGithubAlt className="footer__icon" />
            </a>
            <a href='https://www.linkedin.com/in/aleksandra-marinova-1a091311a/' target="_blank" rel="noopener noreferrer">
                <RiLinkedinLine className="footer__icon" />
            </a>
        </div>
    )
}

export default Footer;