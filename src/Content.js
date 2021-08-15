import Part from './Part'

const Content = ({sisalto}) => {
    // 
    return(
      <div>
        {sisalto.map(a => <Part osa={a} key={a.id} />)}
      </div>
    )
  }

export default Content