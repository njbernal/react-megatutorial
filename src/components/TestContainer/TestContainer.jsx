import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain';
import TypingChallengeContainer from './../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({
    words,
    characters,
    wpm,
}) => {
    return (
        <div className="test-container">
            <div className="typing-challenge-container" data-aos="fade-up">
                <TypingChallengeContainer words={words} characters={characters} wpm={wpm} />
            </div>
            { /* <div className="try-again-container">
                <TryAgain words={ words } characters={ characters } wpm={ wpm } />
                </div> */ }
        </div>
    )
}

export default TestContainer;