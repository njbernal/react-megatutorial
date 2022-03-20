import React from 'react';
import './App.css';
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from './../Footer/Footer';
import ChallengeSection from './../ChallengeSection/ChallengeSection';

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
    state = {
        selectedParagraph: 'REMOVE THIS',
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: []
    };

    typechange = (input) => {
        if (!this.state.timerStarted) this.startTimer();

        /**
         * 1. Handle underflow case - all characters should be shown as not attempted
         * 2. Handle hte overflow case - early exit
         * 3. handle the backspace 
         *  - mark the [index + 1] as not attempted
         *  - don't forget to check for overflow case here
         * 4. Update the status in the test info
         *  - find out hte last character in the inputValue and it's index
         *  - Check if the character matches at testInfo[index]
         * 5. Case, characters, words and wpm should be updated
         */
        const characters = input.length;
        const words = input.split(" ").length;
        const index = characters - 1;
        const testInfo = this.state.testInfo;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                        ...this.state.testInfo.slice(1)
                    }
                ],
                characters,
                words
            });
            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return;
        }

        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].stats = "notAttempted";
        }

        // check for the correct typed letter
        const isCorrect = input[index] === testInfo[index].testLetter;

        // Update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "wrong";

        this.setState({testInfo, words, characters})
    }

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                // Change the WPM
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
                this.setState({wpm: parseInt(wpm)});
                this.setState({timeRemaining: this.state.timeRemaining-1})
            } 
            else {
                clearInterval(timer);
            }
        }, 1000);
    }
    
    componentDidMount () {
        fetch(ServiceUrl).then(response => response.text()).then(data => {
            this.setState( { selectedParagraph: data });
            const selectedParagraphArray = data.split('');
            const testInfo = selectedParagraphArray.map(selectedLetter => {
                return {
                    testLetter: selectedLetter,
                    status: "notAttempted"
                }
            })
            this.setState({testInfo})
        });
    }

    render() {
        return (
            <div className="app">
                { /* Nav Section */ }
                <Nav />
                { /* Landing Page */ }    
                <Landing />
                { /* Challenge Section */ }    
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph} 
                    words={this.state.words} 
                    characters={this.state.characters} 
                    wpm={this.state.wpm} 
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    typeChange={this.typechange}
                />
                { /* Footer */ }   
                <Footer /> 
            </div>
        )
    }
}

export default App;