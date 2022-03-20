import React from 'react';
import './Landing.css';
import landing_image from "./../../assets/hero.png"
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return(
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter 
                        options={{
                            strings: ['Fast?','Well?','Correctly?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img src={ landing_image }
                    data-aos="fade-left"
                    className="flash-image"
                    alt="Hero"
                />
            </div>
        </div>
    )
}

export default Landing;