import logo from './logo.svg';
import './App.css';

const SPOTIFY_SECRET_KEY = process.env.REACT_APP_SPOFITY_KEY;
function App() {
  return (
    <div className="App">
      <img src='https://th.bing.com/th/id/OIP.dwGjNLCuL0qmIQAGYGRiowHaHa?pid=ImgDet&w=630&h=630&rs=1'></img>
      <h2>Sick Feeling</h2>
      <h3>Boy Pablo</h3>
      <p>The song details about queasiness of a breakup and reflections on the past of a now lost relationship.</p>
      <button>Select</button>
    </div>
  );
}

export default App;
