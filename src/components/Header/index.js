import React from "react";
import './index.css';

function Header({black}){
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo"> 
                <a href="https://github.com/Gttolla">
                        <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="Github"/>
                        <p>/Gttolla</p>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;
