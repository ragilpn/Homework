import React from 'react'
import './card.css'

const Card = ({title,singer,image}) => {
  return (
  <div class="playlist">
    <div class="isi">
        <img
        width="100"
          src={image}
          alt="gambar"
        />
    </div>
    <div class="judul"> 
        <h1 class="title">{title}</h1>
        <p class="artis">{singer}</p>
    </div>
    <div class="select">
    <button>select</button>
    </div>
  </div> 
  )
}




export default Card