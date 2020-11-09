import React from 'react'
import  './Header.css'
import * as Header2 from './Header2.module.css';
const Header = (props) => {
    console.log(Header2);
    return(
        
        <header className="Header">
        <button className="Nav2">
        </button>
        <button className="Nav1">
        <p className="First-item"><strong>RESUME</strong></p>
        </button>
        <button className="Nav11">
        <p className="First-item"><strong>PORTFOLIO</strong></p>
        </button>
        <button className="Nav12">
        <p className="First-item"><strong>CONTACT</strong></p>
        </button>
        <section className="Nav3">
            <button className="Nav3ii">
            <img  className="Image2" src='/images/fb.png' alt="fb-pic"/>
            </button>
            <button className="Nav3i">
            <img className="Image1" src='/images/insta.png' alt="insta-pic"/>
            </button>
            <button className="Nav3iii">
            <img className="Image1" src='/images/twit.png' alt="twitter-pic"/>
            </button>
            <button className="Nav3iv"><strong>Hire Me</strong></button>
            <button className="Hamar"><img src="/images/hamarr.png" alt="icon"/></button>
        </section>
        </header>
       
    )
}

export default Header