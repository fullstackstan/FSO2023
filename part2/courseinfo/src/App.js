const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Part = ({ course }) => {
  return (
    <ul>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} contains {part.exercises} exercises
        </li>
      ))}
    </ul>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course} />
    </>
  );
};

const Total = ({course}) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
  return (
    <>
      Total Number of Exercises is {totalExercises}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <br />
      <Content course={course} />
      <br />
      <Total course={course}/>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

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

export default App;
