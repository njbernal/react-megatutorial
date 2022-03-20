import React from "react";
import './TestLetter.css';

const TestLetter = ( { letter} ) => {
    const { status } = letter;
    return (<span className= { `test-letter test-letter-${status}` }>{letter.testLetter}</span>);
}

export default TestLetter;