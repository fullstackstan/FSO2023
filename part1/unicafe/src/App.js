import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = ()=>{
    console.log("good clicked")
    const newTotal = good+1
    setGood(newTotal) 
       
    }
  const neutralClick = ()=>{
    console.log("neutral clicked")
    const newTotal = neutral+1
    setNeutral(newTotal) 
       
    }
  const badClick = ()=>{
    console.log("bad clicked")
    const newTotal = bad+1
    setBad(newTotal) 
       
    }
    
  

const Button = (props)=>{
  return (
    <>
<button onClick={props.handleClick}>{props.text}
</button>

    </>
  )
}
  
  
  return (
    <div>
      <h2>unicafe reviews</h2>
    <Button handleClick={goodClick} text={"good"}/>
    <Button handleClick={neutralClick} text={"neutral"}/>
    <Button handleClick={badClick} text={"bad"}/>
    
      <h2>unicafe reviews totals</h2>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}
    </div>
  )
}

export default App