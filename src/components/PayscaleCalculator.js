import React, { useState } from 'react';

const PayscaleCalculator = () => {
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [payscale, setPayscale] = useState(null);

  const handleCalculate = () => {
    const payscale = parseInt(salary) + parseInt(bonus);
    setPayscale(payscale);
  };

  return (
    <div>
      <h2>Payscale Calculator</h2>
      <div>
        <label>Salary:</label>
        <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
      </div>
      <div>
        <label>Bonus:</label>
        <input type="number" value={bonus} onChange={e => setBonus(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {payscale !== null && <p>Payscale: {payscale}</p>}
    </div>
  );
};

export default PayscaleCalculator;
