import './App.css';
import Instructions from './components/Instruction.js'
import Game from './components/Game.js'
import Leaderboard from './containers/Leaderboard.js'

function App() {
  return (
    <div className="App">
     
      <Game />
      <Instructions />

      <Leaderboard />

    </div>
  );
}

export default App;