
const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({osa}) => {
  return <p>{osa.name} {osa.exercises}</p>
}

const Content = ({sisalto}) => {
  return(
    <div>
      {sisalto.map(a => <Part osa={a} key={a.name} />)}
    </div>
  )
}

const Total = ({harj}) => {
  return <p>Number of exercises {harj.map(a => a.exercises).reduce((a,b) => a + b, 0)}</p>
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content sisalto={parts} />
      <Total harj={parts} />
    </div>
  )
}

export default App;
