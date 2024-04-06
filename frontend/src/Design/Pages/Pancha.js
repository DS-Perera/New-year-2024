import React, { useState } from "react";

const Pancha = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [finishedState, setFinishedState] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 7);
    setRandomNumber(newRandomNumber);
    setState1((prevState) => prevState + newRandomNumber); // Adding the random number to state1
    setIsButtonDisabled(true); // Disable the button when clicked

    // Increment state2 after 20 seconds
    setTimeout(() => {
      const newRandomNumberForState2 = Math.floor(Math.random() * 7);
      setState2((prevState) => prevState + newRandomNumberForState2);
      setIsButtonDisabled(false); // Enable the button after incrementing state2
    }, 2000);
  };

  // Check if either state1 or state2 is finished
  if (state1 >= 20 || state2 >= 20) {
    setIsGameFinished(true);
    setFinishedState(state1 >= 20 ? "State 1" : "State 2");
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {!isGameFinished && (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={generateRandomNumber}
            disabled={isButtonDisabled}
          >
            Generate Random Number
          </button>
          {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
          <div>
            <p>State 1: {state1}</p>
            <p>State 2: {state2}</p>
          </div>
        </>
      )}
      {isGameFinished && <p>{finishedState} is finished!</p>}
    </div>
  );
};

export default Pancha;
