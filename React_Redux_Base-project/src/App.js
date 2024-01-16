import './App.css';
import Title from './Title';
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes store={store}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
