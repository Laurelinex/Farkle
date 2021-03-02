import './App.css';
import Instructions from './components/Instruction.js'
import Game from './components/Game.js'
import Leaderboard from './containers/Leaderboard.js'
import Sound from './components/SoundTest'

function App() {
  return (
    <div className="App">
      <Sound />
     
      <Game />
      <Instructions />

      <Leaderboard />

    </div>
  );
}

export default App;