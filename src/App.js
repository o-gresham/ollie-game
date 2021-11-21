import './App.css';
import Game from './game';
import Canvas from './Canvas';

function App() {
  const GAME_WIDTH = window.innerWidth;
  const GAME_HEIGHT = window.innerHeight;
  const options = { 
    context: '2d'
  }
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);

  const draw = (ctx) => {
    ctx.fillStyle = '#000'
    game.draw(ctx);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Canvas draw={draw} options={options} width={GAME_WIDTH} height={GAME_HEIGHT}/>
      </header>
    </div>
  );
}

export default App;
