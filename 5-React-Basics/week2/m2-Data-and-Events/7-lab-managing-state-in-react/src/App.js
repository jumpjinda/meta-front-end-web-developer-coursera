import {useState} from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {

  const [fruits, setFruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  const handleFruits = () => setFruits([{fruitName: 'orange', id: 0}]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
      <button onClick={handleFruits}>set fruits</button>
    </div>
  );
};

export default App;
