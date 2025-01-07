import React, {useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './SimpleLineChartStyleSheet.css'



/**function to organize data by crime
 * Should object where key = 'crime' and value is an array of 
 * objects containg 'year' and 'cases' 
 */

const groupDataByCrime = (data) => {
  return data.reduce((acc, { crime, year, cases }) => {
    // Check if the crime already exists in the accumulator
    if (!acc[crime]) {
      acc[crime] = [];  // Initialize an array for the crime if not exists
    }
    // Add the year and cases for the corresponding crime
    acc[crime].push({ year, cases });
    acc[crime].sort((a, b) => a.year - b.year);

    return acc;
  }, {});
};

function ChartHeader({ onCrimeTypeChange }) {
  return (
    <form className="label-container">
      <label>
        <input
          type="radio"
          name="crimeType"
          value="Murder"
          onChange={onCrimeTypeChange}
        />
        Murder
      </label>
      <label>
        <input
          type="radio"
          name="crimeType"
          value="Rape"
          onChange={onCrimeTypeChange}
        />
        Rape
      </label>
      <label>
        <input
          type="radio"
          name="crimeType"
          value="Robbery"
          onChange={onCrimeTypeChange}
        />
        Robbery
      </label>
      <label>
        <input
          type="radio"
          name="crimeType"
          value="Fel. Assault"
          onChange={onCrimeTypeChange}
        />
        Fel. Assault
      </label>
      <label>
        <input
          type="radio"
          name="crimeType"
          value="Burglary"
          onChange={onCrimeTypeChange}
        />
        Burglary
      </label>
    </form>
  );
}

function SimpleLineChart({data,crimeType}) {
  const groupedData = groupDataByCrime(data);
  const crimeData = crimeType ? groupedData[crimeType] : [];

    return (
          <ResponsiveContainer width="100%" height="100%">
              <LineChart
              width={500}
              height={500}
              data={crimeData}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='year' />
              <YAxis />
              <Tooltip />
              <Legend />
              {/*for each line set in data, create  <Line> with */}
              <Line type="monotone" dataKey='cases' stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
          </ResponsiveContainer>
    )
}

function GenerateChart({data}){
  const [crimeType, setCrimeType] = useState([]);
  
  const onCrimeTypeChange = (e) => {
    const value= e.target.value;
    setCrimeType(value);
  };
  
  return (
    <div style={{height: '600px'}}>
        <ChartHeader
          onCrimeTypeChange={onCrimeTypeChange}/>
        <SimpleLineChart
          data={data}
          crimeType ={crimeType}
          />
    </div>
  )
}

export default GenerateChart