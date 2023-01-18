import { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";

const WelcomeForm = () => {
  const [userName, setUserName] = useState("");
  // Users Input
  const handleInput = (event) => {
    const usersName = event.target.value;
    setUserName(usersName);
  };

  const formButton = document.querySelector('button[type="submit"]');
  // Connect users input to submit event listener
  if (userName.length > 0 && formButton) {
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
  };

  return (
    <form className="welcomeForm" onSubmit={handleSubmit}>
      <legend> please enter your name below to get started...</legend>
      <div className="buttonContainer">
        <input
          type="text"
          placeholder="Parker"
          required
          value={userName}
          onChange={handleInput}
        />
        <button type="submit">
          <BsArrowReturnLeft className="arrow" />
        </button>
      </div>
    </form>
  );
};

export default WelcomeForm;
