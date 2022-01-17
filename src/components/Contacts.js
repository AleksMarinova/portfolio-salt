import '../styles/Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contact-item">
                <a href="https://github.com/AleksMarinova" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <div className="contact-item">
                <a href="https://www.linkedin.com/in/aleksandra-marinova-1a091311a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div> 
            <div className="contact-item">
                <a href="mailto:aleks.marinova@protonmail.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
            </div>    
        </div>
    )
}

export default Contacts;