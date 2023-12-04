import axios from "axios";
import PlayerMaket from "./components/PlayerMaket";
import { CORE_CONCEPTS } from './components/data';
const baseUrl = "https://reqres.in/api/users?page=1"

export default function App() {
    
  return (
    <div className="App">
      <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <PlayerMaket key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
    
    </div>
  );
}
