import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Multiplier />
    </div>
  );
}
function Multiplier() {
  const [step5, setStep5] = useState(1);
  function addFive() {
    setStep5((s) => s + 1);
  }
  function subtractFive() {
    if (step5 >= 2) setStep5((s) => s - 1);
  }
  return (
    <div>
      <div>
        <button onClick={subtractFive}>-</button>
        <span>Step:{step5}</span>
        <button onClick={addFive}>+</button>
      </div>
      <Counter step5={step5} />
    </div>
  );
}

function Counter({ step5 }) {
  const [step, setStep] = useState(0);

  const date = new Date('June 21 2027');
  date.setDate(date.getDate() + step);

  function addSingle() {
    setStep((s) => s + step5);
  }
  function subtractSingle() {
    setStep((s) => s - step5);
  }

  return (
    <div>
      <div>
        <button onClick={subtractSingle}>-</button>
        <span>Count:{step}</span>
        <button onClick={addSingle}>+</button>
      </div>

      <p>
        <span>
          {step === 0
            ? 'Today is '
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(step)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
