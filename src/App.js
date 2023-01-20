import welcomeImg from "./style/assets/Capture.PNG";
import WelcomeForm from "./components/signIn/WelcomeForm.js";
import auth from "./auth/auth";
import "./input.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper lg:flex  pt-32 lg:pt-52">
        <div className=" w-1/2">
          <img src={welcomeImg} alt="" className="w-full" />
        </div>
        <div className="flex flex-col self-center justify-end ml-10 lg:w-1/2 pt-6">
          <h2 className="text-3xl">welcome to</h2>
          <h1 className="text-xl">Life Tracker</h1>
          <WelcomeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
