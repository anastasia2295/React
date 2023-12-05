import axios from "axios";
import PlayerMaket from "./components/PlayerMaket";


const baseUrl = "https://reqres.in/api/users?page=1"

export default function App() {
    
  return (
    <div className="App">
      <ul>
            <PlayerMaket/>
          </ul>
    
    </div>
  );
}