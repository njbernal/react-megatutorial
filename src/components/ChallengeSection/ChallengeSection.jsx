import React from 'react';
import './ChallengeSection.css';
import TestContainer from './../TestContainer/TestContainer';

const ChallengeSection = ( { selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, typeChange, startAgain }) => {
    return (
        <div className="challenge-section-container">
            <h1 className="challenge-section-header" data-aos="fade-down">
                Take a speed test now
            </h1>
            <TestContainer 
                words={words} 
                characters={characters} 
                wpm={wpm}
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                typeChange={typeChange}
                startAgain={startAgain}
            />
        </div>
    );
}

export default ChallengeSection;