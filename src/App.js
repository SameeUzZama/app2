import "./App.css"; //(1.1)
import Landing from "./Components/Landing";

//(1.2)
const App = () => {
  return (
    <div className="App">
      {/* (1.3) */}
      <Landing />
    </div>
  );
};

export default App;
