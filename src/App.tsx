
import './App.css'
import ChooseAndPlay from './sections/ChooseAndPlay/ChooseAndPlay'
import ScoreAndResult from './sections/ScoreAndResult/ScoreAndResult'

function App() {

  return (
    <div className='container'>
      <div className='title-container'>
        <p >Welcome to the game</p>
        <h1 >ROCK ✊ PAPER ✋SISSORS ✌️</h1>
        <p>React TypeScript</p>
      </div>


      <div>
        <ScoreAndResult />
        <ChooseAndPlay />
      </div>


    </div>
  )
}

export default App
