import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "store",
  initialState: {
    playlist: [
      {name : "playlist Ragil", songs: []}
    ],
  },
  reducers: {
      AddNewPlaylist: (state, action) => {
        state.playlist = [...state.playlist, {name: action.payload, songs: []}]
      },
      AddNewSongToPlaylist: (state, action) => {
        const {playlistName, song} = action.payload
        state.playlist = state.playlist.map((val) => {
          if (val.name === playlistName) {
              val.songs = [...val.songs, song]
          }
          return val
      })
      }
  },
});

export const { AddNewPlaylist, AddNewSongToPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
