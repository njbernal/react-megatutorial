import React from 'react';
import './TryAgain.css';

const TryAgain = ( {characters, words, wpm, startAgain} ) => {
    const handleClick = (e) => {
        startAgain(e);
    };
        return (
            <div className="try-again-container">
                <h1>Test Results</h1>

                <div className="results-container">
                    <p>
                        <b>Words:</b> { words }
                    </p>
                    <p>
                        <b>Characters:</b> { characters }
                    </p>
                    <p>
                        <b>Speed:</b>{ wpm }
                    </p>
                </div>
                <div>
                    <button className="end-buttons start-again-btn" onClick={ (e) => handleClick(e) }>Re-Try</button>
                    <button 
                        className="end-buttons share-btn"
                        onClick={ () => {
                            window.open("https://www.facebook.com/sharer/sharer.php?u=njbernal.github.com", "facebook-sharer-dialog", "width=800,height=600");
                        }}>
                        Share
                    </button>
                    <button 
                        className="end-buttons tweet-btn"
                        onClick={ () => {
                            window.open("https://twitter.com/intent/tweet?text=njbernal.github.com", "Twitter")
                        }}>
                        Twitter
                    </button>
                </div>
            </div>
        )
}

export default TryAgain;