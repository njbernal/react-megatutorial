import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ( { selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo } ) => {

    return (
        <div className="typing-challenge-container">
            { /* detail section */ }
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            { /* real section */ }
            <div className="typewriter-container">
                <TypingChallenge selectedParagraph={ selectedParagraph } timeRemaining={timeRemaining} timerStarted={timerStarted} testInfo={testInfo} />
            </div>
        </div>
    )
}
export default TypingChallengeContainer;