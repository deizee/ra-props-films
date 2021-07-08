import './App.css';
import Stars from "./Stars/Stars";

function App() {
  const count = (Math.random() * 5).toFixed(0);

  return (
      <Stars count={count} />
  );
}

export default App;
