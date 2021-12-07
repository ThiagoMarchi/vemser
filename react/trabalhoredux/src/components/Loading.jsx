import { LinearProgress } from '@material-ui/core'
import './Loader.css'

const Loading = () => {
  return ( 
    <div className="loader">
      <div className="loaders">
        <LinearProgress style={{ height: 30, margin: "20px 0" }}/>
      </div>
    </div>
  )
}


export default Loading