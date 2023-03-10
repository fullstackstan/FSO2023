const Header = (props)=>{
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props)=>{
  return (
    <>
    {props.part} contains {props.count} exercises
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.part1} count={props.count1}/> <br />
    <Part part={props.part2} count={props.count2}/><br />
    <Part part={props.part3} count={props.count3}/>
    </>
  )
}

const Total = (props)=>{
  return (
    <>
    Total Number of Exercises is {props.total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
      <p>
        <Content part1={part1} count1={exercises1} part2={part2} count2={exercises2} part3={part3} count3={exercises3} />
      </p>
      <h4>
        <Total total={exercises1 + exercises2 + exercises3} />
      </h4>
    </div>
  )
}

export default App