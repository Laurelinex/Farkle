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

      <div className="grid-container">
        <Game />
        <Leaderboard />
        <Instructions />
        
      </div>
      
      <Footer />

    </div>
  );
}

export default App;