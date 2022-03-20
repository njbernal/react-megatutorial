import React from "react";
import './TypingChallenge.css';
import TestLetter from './../TestLetter/TestLetter';

const TypingChallenge = ( { timeRemaining, timerStarted, testInfo, typeChange } ) => {

    const handleChange = (e) => {
        typeChange(e);
    }

    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                    { timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining }
                </p>
                <p className="timer-info">
                    {!timerStarted && 'Start typing to start the test.' }
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea-test-paragraph">
                        {
                            testInfo.map( (letter, index) => {
                                return <TestLetter key={index} letter={letter} />
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here" onChange={ (e) => handleChange(e.target.value) }></textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;