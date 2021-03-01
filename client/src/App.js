import './App.css';
import Instructions from './components/Instruction.js'
import Game from './components/Game.js'
import Leaderboard from './containers/Leaderboard.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">

      <Header />
     
      <Game />
      <Instructions />
      <Leaderboard />

      <Footer />

    </div>
  );
}

export default App;