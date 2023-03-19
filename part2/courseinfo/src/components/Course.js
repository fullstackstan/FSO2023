const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <br />
      <Content course={course} />
      <br />
      <Total course={course} />
    </>
  );
};
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

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return <>Total Number of Exercises is {totalExercises}</>;
};

export default Course