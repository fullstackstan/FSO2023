const Header = (props)=>{
  return (
    <>
    <h1>{props.course.name}</h1>
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
     <Part part={props.course.parts[0].name} count={props.course.parts[0].exercises}/> <br />
    <Part part={props.course.parts[1].name} count={props.course.parts[1].exercises}/><br />
    <Part part={props.course.parts[2].name} count={props.course.parts[2].exercises}/> 
    </>
  )
}

const Total = (props)=>{
  return (
    <>
    Total Number of Exercises is {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <p>
        <Content course={course} />
      </p>
      <h4>
        <Total course={course} />
      </h4>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       {/* <p>
//         <Content part1={parts[0].name} count1={parts[0].exercises} part2={parts[1].name} count2={parts[1].exercises} part3={parts[2].name} count3={parts[2].exercises} />
//       </p> */}
//       <p>
//         <Content parts={parts} />
//       </p>
//       <h4>
//         {/* <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises }/> */}
//         <Total parts={parts} />
//       </h4>
//     </div>
//   )
// }
// ! exercise 1-4

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <p>
//         <Content part1={part1.name} count1={part1.exercises} part2={part2.name} count2={part2.exercises} part3={part3.name} count3={part3.exercises}/>  <br />
//       </p>
//       <h4>
//       <Total total={part1.exercises+part2.exercises+part3.exercises} />
//       </h4>
//     </div>
//   )
// }

// exercise 1-3

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//     <Header course={course} />
//       <p>
//         <Content part1={part1} count1={exercises1} part2={part2} count2={exercises2} part3={part3} count3={exercises3} />
//       </p>
//       <h4>
//         <Total total={exercises1 + exercises2 + exercises3} />
//       </h4>
//     </div>
//   )
// }
//! exercise 1-2

export default App