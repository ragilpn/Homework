import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({
  title,
  singer,
  image,
  playlists,
  handleNewSongToPlaylist,
  handleOpen,
}) => {
  const [selectToggle, setToggle] = useState(false);

  const handleToggleSelect = () => {
    setToggle(!selectToggle);
  };

  return (
    <div class="playlist">
      <div class="isi">
        <img width="100" src={image} alt="gambar" />
      </div>
      <div class="judul">
        <h1 class="title">{title}</h1>
        <p class="artis">{singer}</p>
      </div>
      <div class="select">
        <button onClick={() => handleOpen(title, singer, image)}>
          add to playlist
        </button>
        {selectToggle && (
          <div>
            {playlists.map((playlist, key) => (
              <div key={key}>
                <button
                  onClick={() => {
                    handleNewSongToPlaylist(title, playlist.name);
                  }}
                >
                  {playlist.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
