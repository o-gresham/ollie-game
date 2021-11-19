import './App.css';
import Game from './game';
import Canvas from './Canvas';

function App() {
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  const options = { 
    context: '2d'
  }
  let game = new Game(GAME_WIDTH, GAME_HEIGHT);

  const draw = (ctx) => {
    ctx.fillStyle = '#000'
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
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
