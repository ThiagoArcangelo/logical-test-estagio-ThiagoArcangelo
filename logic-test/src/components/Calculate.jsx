import {useState } from 'react';
import './Calculate.css'

function CalculateInputs() { 

  const [ value, setValue ] = useState();  
  const [ operator, setOperator ] = useState();
  const [ results, setResults ] = useState([]);
  const [ alert, setAlert ] = useState('');

  function sendAlert() {
    setResults("");
    return setAlert("Digite números positivos válidos!");
  }

  function calculateDivision() {

    const response = value / operator;

    if(operator <= 0) {
      return sendAlert();
    }

    if(value <= 0) {
      return sendAlert();
    }

    if(!value || !operator ) {
      return sendAlert();
    } 

    let numbersRestul = [];

    for (let i = 0; i < operator; i++) {

      let startResult = i * response;
      let endResult = (i + 1) * response - 1;

      if(startResult !== parseInt(startResult)) {
        startResult = startResult.toFixed(1);
      } 

      if(endResult !== parseInt(endResult)) {
        endResult = endResult.toFixed(1);
      }

      if (i === operator - 1) {
        endResult = value;
    }
            
      
      numbersRestul.push(`${startResult} até ${endResult}`);  

      setResults(numbersRestul);

    } 
  }


  return (
    <div className="box">
      <div className='titleField'><label>Valor:</label></div>
      <input type='number' className='input' value={value} onChange={event => setValue(event.target.value)}/>
      <div className='titleField'><label>Divisor:</label></div>
      <input type='number' className='input' value={operator} onChange={event => setOperator(event.target.value)} />
      <button onClick={calculateDivision} >Calcular</button>
      <div className="results">
        {results.map((result, i) => (<div className='resultNumbers' key={i}>{result}</div>))}
      </div>
      <div>{alert}</div>       
    </div>
  )
}

export default CalculateInputs