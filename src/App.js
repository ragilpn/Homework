import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Library from './pages/Library/Library';

const MUSPLAY=process.env.REACT_APP_MUSPLAY
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="add-playlist" element={<Playlist />} />
              <Route path="library" element={<Library />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      
    </div>
  );
}


export default App;