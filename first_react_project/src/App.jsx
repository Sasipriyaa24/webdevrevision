import React from 'react';
import Ue from '/.Ue';
const fruits = ["Apple", "Mango", "Orange"];
function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
export default App;