import React, { useState, useEffect } from "react";
import Card from "../../components/Lagu/Card";
import SearchBar from "../../components/Search/Search";
import banner from "../../banner.png";
import { getData } from "../../utils";
import "./style.css";
import DrawerPlaylist from "../../components/Drawer/Playlist";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewPlaylist,
  AddNewSongToPlaylist,
} from "../../Redux/playlistSlice";
import DrawerListPlaylist from "../../components/Drawer/ListPlaylist";

const Home = () => {
  const data = useSelector((state) => state.store.playlist);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const [playlists, setPlaylists] = useState([]); // playlist disimpan di sini
  const [selectedSong, setSelectedSong] = useState({}); // playlist disimpan di sini
  const [playlistName, setPlaylistName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  useEffect(() => {
    console.log(results);
  }, [results]);

  // fungsi buat tombol untuk buka add playlist
  const handleClickOpen = (e) => {
    setOpen(true);
  };

  // fungsi buat tombol close pada add playlist (penerapannya ada di page playlist)
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = (title, singer, image) => {
    setOpen1(true);
    setSelectedSong({
      title: title,
      singer: singer,
      image: image,
    });
  };

  // fungsi buat tombol close pada add playlist (penerapannya ada di page playlist)
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleNewPlaylist = (e) => {
    dispatch(AddNewPlaylist(playlistName));
    setPlaylistName("");
    setOpen(false);

    // NOTE: old function odi, change cause using REDUX
    // setPlaylists([...playlists, {name: playlistName, songs: []}])
    // setPlaylistName("")
    // setOpen(false)
  };

  const handleNewSongToPlaylist = (song, playlistName) => {
    const props = {
      song: song,
      playlistName: playlistName,
    };
    dispatch(AddNewSongToPlaylist(props));
    setOpen1(false);
    // const newPlaylists = playlists.map((val) => {
    //     if (val.name === playlistName) {
    //         val.songs = [...val.songs, song]
    //     }
    //     return val
    // })

    // setPlaylists(newPlaylists);
  };

  const handlePlaylistChange = (e) => {
    setPlaylistName(e.target.value);
  };

  useEffect(() => {
    console.log(playlists);
  }, [playlists]);

  const validate = (query) => {
    if (token === "") {
      alert("Please login first!");
      return false;
    }

    if (query === "") {
      setResults([]);
      setError("");
      return false;
    }

    return true;
  };

  const search = async (query) => {
    if (!validate(query)) return;
    try {
      const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
      const response = await getData(url, token);

      if (response.tracks.items.length === 0) throw Error("Result not found");

      setError("");
      setResults(response.tracks.items);
    } catch (error) {
      setError(error.message);
    }
  };

  const login = () => {
    const callbackUrl = "http://localhost:3000/";
    const clientId = "088d0c7e4aa0454292b279ac6c7fb4d2";
    const scope = [
      "playlist-modify-private",
      "user-read-currently-playing",
      "playlist-read-private",
    ];
    const url = `https://accounts.spotify.com/en/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(
      scope
    )}&redirect_uri=${encodeURIComponent(callbackUrl)}`;

    window.location.replace(url);
  };

  const logout = () => {
    setToken("");
    window.location.replace("http://localhost:3000/");
  };

  useEffect(() => {
    const access_token = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );
    setToken(access_token ?? "");
  }, []);

  return (
    <>
      <div className="navbar">
        <SearchBar onSearch={search} />

        <div className="nav">
          <button>
            <p>Home</p>
          </button>
          <a href="/library">
            <button>
              <p>Your Library</p>
            </button>
          </a>
          <button onClick={handleClickOpen}>
            <p>Create Playlist</p>
          </button>
          <button>
            <p>Liked Songs</p>
          </button>
        </div>

        {token === "" ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
      <div className="container">
        {results &&
          error === "" &&
          results.map((a) => (
            <Card
              key={a.id}
              image={a.album.images[1].url}
              title={a.name}
              singer={a.artists[0].name}
              playlists={playlists}
              handleNewSongToPlaylist={handleNewSongToPlaylist}
              handleOpen={handleClickOpen1}
            />
          ))}
        {results.length === 0 && error === "" && (
          <img src={banner} width="100%" height="100%" alt="" />
        )}
      </div>
      <div className="playlist">
        <DrawerPlaylist
          open={open}
          handleClose={handleClose}
          handlePlaylistChange={handlePlaylistChange}
          playlistName={playlistName}
          handleNewPlaylist={handleNewPlaylist}
        />
        <DrawerListPlaylist
          open={open1}
          handleClose={handleClose1}
          song={selectedSong}
          handleNewSongToPlaylist={handleNewSongToPlaylist}
        />
      </div>
    </>
  );
};

export default Home;
