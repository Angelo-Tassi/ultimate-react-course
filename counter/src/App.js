import "./index.css";
import "./App.css";
import { useState } from "react";

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
      <div class="reset">
        <input
          class="reset"
          type="range"
          min="1"
          max="10"
          value={step5}
          onChange={(e) => setStep5(Number(e.target.value))}
        ></input>
        {/* <button onClick={subtractFive}>-</button> */}
        <span class="reset">Step:{step5}</span>
        {/* <button onClick={addFive}>+</button> */}
      </div>
      <Counter step5={step5} setStep5={setStep5} />
    </div>
  );
}

function Counter({ step5, setStep5 }) {
  const [step, setStep] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + step);

  function addSingle() {
    setStep((s) => s + step5);
  }
  function subtractSingle() {
    setStep((s) => s - step5);
  }
  function handleReset() {
    setStep(0);
    setStep5(1);
  }

  return (
    <div>
      <div>
        <button class="reset" onClick={subtractSingle}>
          -
        </button>
        <input
          class="reset"
          type="text"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <button class="reset" onClick={addSingle}>
          +
        </button>
      </div>
      <p class="reset">
        <span>
          {step === 0
            ? "Today is "
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(step)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(step === 0) & (step5 === 1) ? (
        ""
      ) : (
        <div>
          <button class="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
