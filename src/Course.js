import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return(
        <>
        {course.map(c => {
            return(
                <div key={c.name}>
                    <Header course={c.name} />
                    <Content sisalto={c.parts} />
                    <Total harj={c.parts} />
                </div>
            ) 
        })
        }
        </>
      
    )
  }

export default Course