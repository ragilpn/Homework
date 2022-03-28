import logo from './logo.svg';
import data from './data';
import './App.css';

const SPOTIFY_SECRET_KEY = process.env.REACT_APP_SPOFITY_KEY;
function App() {
  const Song = ({Title,album,artist,images}) => (
  <div className='playlist'>
    <div className='header'>
    <h2 className='title'>{Title}</h2>
    </div>
    <div className='isi'>
      <img 
      src={images}
      alt="gambar"
      />
      <p className='artis'>{artist}</p>
      <button className='btn'>Select</button>
    </div>
  </div>
  )
  return (
<div className="table-of-tracks">
        {data.map((data) => {
          return (
            <Song
              key={data.album.id}
              album={data.album.name}
              images={data.album.images[0].url}
              Title={data.name}
              artist={data.artists[0].name}
            />
          );
        })};
      </div>
  );
}

export default App;