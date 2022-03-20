import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain';
import TypingChallengeContainer from './../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo  }) => {

    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div className="typing-challenge-container" data-aos="fade-up">
                        <TypingChallengeContainer words={words} characters={characters} wpm={wpm} selectedParagraph={selectedParagraph} timerStarted={timerStarted} timeRemaining={timeRemaining} testInfo={testInfo} />
                    </div>
                ) : (
                    <div className="try-again-container">
                        <TryAgain words={ words } characters={ characters } wpm={ wpm } />
                    </div>
                )
            }
        </div>
    )
}

export default TestContainer;