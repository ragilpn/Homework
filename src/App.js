import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

const MUSPLAY=process.env.REACT_APP_MUSPLAY
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}


export default App;