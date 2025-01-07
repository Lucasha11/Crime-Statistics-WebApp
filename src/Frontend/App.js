import React, { useState, useEffect } from 'react'; 
import Navbar from './Components/Navbar/Navbar.js'
import GenerateChart from './Components/Charts/SimpleLineChart.js';

function App() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch("api/crimes")
    .then(res => res.json())
    .then(json => setData(json))
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <Navbar/>
      <GenerateChart data={data}/>
    </div>
  );
}

export default App;
