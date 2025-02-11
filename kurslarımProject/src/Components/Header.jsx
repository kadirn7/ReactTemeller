import React from "react";
// import './src/css/Header.css'; // mevcut kod
import '../css/Header.css';
import data from '../Data/Data.json'; // Güncellenmiş yol

function Header(){
    return(
        <div className='header'>
            <div className="title"> PROJELERİM</div>
            <ul>
                {data.project.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} />
                    </li>
                ))}
            </ul>
            <div className="users">
                <h2>Kişiler</h2>
                <ul>
                    {data.Kişi.map((Kişi, index) => (
                        <li key={index}>
                            <h3>{Kişi.ad} - {Kişi.ünvan}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Header