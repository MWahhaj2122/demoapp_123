import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div>
    <Dinner dish = 'White Karahi' sweet = 'Kheer' > </Dinner>
    <br/>
    <Dinner dish = 'Malai Booti' sweet = 'Sheer Quormaa'></Dinner>
    <br />
    <Dinner dish = 'Chicken Jalfarazi' sweet = 'Halwaa'></Dinner>
    <br />
    <Dinner dish = 'Chicken' sweet = 'Kheer'></Dinner>
    </div>
  )
}
export default App;
