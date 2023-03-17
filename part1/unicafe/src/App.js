import { useState } from 'react'

const Statistics = ({good,neutral,bad}) => {
  const totalVotes = good+bad+neutral

  if (totalVotes===0){
    return (
      <h4>No Votes Entered Yet</h4>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <table>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total votes" value ={totalVotes} />
      <StatisticLine text="average" value ={(good+(-bad))/totalVotes} />
      <StatisticLine text="percent positive" value ={(good/totalVotes)*100}  percent={'%'} />
      </table>
    </div>
  )
}

const StatisticLine = ({text,value,percent})=>{
  return (
    <tbody>
    <tr>
    <td>{text}</td><td> {value} {percent}</td>
    </tr>
    </tbody>

  )
}

const Button = (props)=>{
  return (
    <>
<button onClick={props.handleClick}>{props.text}
</button>

    </>
  )
}

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

  return (
    <div>
      <h2>unicafe reviews</h2>
    <Button handleClick={goodClick} text={"good"}/>
    <Button handleClick={neutralClick} text={"neutral"}/>
    <Button handleClick={badClick} text={"bad"}/>
    <br/>
    <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App