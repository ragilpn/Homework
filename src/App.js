import logo from './logo.svg';
import data from './data';
import './App.css';

const SPOTIFY_SECRET_KEY = process.env.REACT_APP_SPOFITY_KEY;
function App() {
  return (
    <div className="App">
      <img src={data.album.almat}></img>
      <h2>{data.album.name}</h2>
      <h3>{data.album.art}</h3>
      <h3>{data.album.release_date}</h3>
      <h3>{data.album.total_tracks}</h3>
      <button>Select</button>
    </div>
  );
}

export default App;
