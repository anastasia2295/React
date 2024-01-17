import './App.css';
import Title from './Title';
import Likes from './Likes';
import Comments from './comments';
import Spin from './Spin';
import {useSelector} from "react-redax"


function App() {
  const error = useSelector(state => state.appReducer.error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
