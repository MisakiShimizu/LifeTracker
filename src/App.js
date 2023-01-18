import welcomeImg from "./style/assets/Capture.PNG";
import WelcomeForm from "./components/WelcomeForm.js";
import "./style/sass/style.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper welcomeOuter">
        <div className="openDiagram">
          <img src={welcomeImg} alt="" className="welcomeImg" />
        </div>
        <div className="welcomeContainer">
          <h2>welcome to</h2>
          <h1>Life Tracker</h1>
          <WelcomeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
