import { useState } from "react";
import Tabs from "./Tabs";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const WelcomeForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Connect users input to submit event listener
  //   if (userName.length > 0 && formButton) {
  //   }
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(userName);
  //   };

  return (
    <div>
      {/* Container */}
      <div>
        <div className="welcomeTab">
          <Tabs setEmail={setEmail} setPassword={setPassword} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
