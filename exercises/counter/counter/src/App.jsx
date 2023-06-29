import { useState } from "react"


function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


  const [step, setStep] = useState(1)
  const [count, setCount] = useState(1)

  function Increase() {
    setCount((s) => s + 1)
  }
  function Decrease() {

    setCount((s) => s - 1)

  }
  function Increases() {
    setStep((s) => s + count)
  }
  function Decreases() {

    setStep((s) => s - count)

  }
  return (
    <>
      <div>
        <button onClick={Decrease}>-</button>
        <span>Step: {count}</span>
        <button onClick={Increase}>+</button>
      </div>
      <button onClick={Decreases}>-</button>
      <span>Count: {step}</span>
      <button onClick={Increases}>+</button>

      <p >
        {step} day{step > 1 ? "s" : ""} from today is {date}

      </p>
      {/* </div> */}
    </>

  )
}
export default App
