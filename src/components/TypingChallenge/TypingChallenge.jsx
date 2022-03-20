import React from "react";
import './TypingChallenge.css';
import TestLetter from './../TestLetter/TestLetter';

const TypingChallenge = ( { selectedParagraph, timeRemaining, timerStarted, testInfo } ) => {
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
                        {/* { selectedParagraph }     */}
                        {
                            testInfo.map( letter => {
                                return <TestLetter letter={letter} />
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here"></textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;