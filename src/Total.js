const Total = ({harj}) => {
    return <h4>Total of exercises {harj.reduce((a, b) =>  a + b.exercises, 0)}</h4>
  }

export default Total