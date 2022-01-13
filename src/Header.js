import React from 'react';
import { useState } from 'react';


const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        
        <header className="App-header" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
        onClick={() => setIsHovered(!isHovered)}>
            
            <div className="App-title">Hi, I am {
                isHovered ? <span className="App-title-name">Александра</span> : <span className="App-title-name">Aleksandra</span>
            },</div>
            <div className="App-subtitle">a fullstack JavaScript developer based in Oslo.</div>
        </header>
        
    );
}

export default Header;