import React from 'react';
import mario from "../assets/mario.gif"
import title from "../assets/super_mario_maker_2_title.jpg"
import "../styles/Main.css"

const Main = () => {
  return (
    <div className="main">
      <img className="main__spinner" src={mario} alt="" />
      <h1>Course Info Lookup</h1>
      <img className="main__hero" src={title} alt="" />
    </div>
  )
}

export default Main
