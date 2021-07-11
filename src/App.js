import './App.css';
import Stars from "./Stars/Stars";

function App() {
  return (
      <div className="App">
        <Stars count={3} />
        <Stars count={2} />
        <Stars count={4} />
        <Stars count={10} />
        <Stars />
      </div>
  );
}

export default App;
