import logo from './logo.svg';
import './App.css';

import AlbumsList from './AlbumsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label htmlFor="search">Nombre del Artista: </label>
          <input type="text" name="search" id="search" />
          <button>Buscar</button>
        </form>
        <AlbumsList />
      </header>
    </div>
  );
}

export default App;
