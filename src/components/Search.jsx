import React, { useState, useEffect } from 'react'
import "../styles/Search.css"
import mario from "../assets/mario.gif"
import Results from './Results'
import { LevelInfo } from "../config/api"
import title from "../assets/super_mario_maker_2_title.jpg"
import axios from "axios"

const Search = (props) => {


// WQV126GNF
// 5YG7DNPGG
const [result, setResult] = useState("");
const [levelInfo, setLevelInfo] = useState({});
const [levelThumb, setLevelThumb] = useState()
const [loading, setLoading] = useState(false)

useEffect(()=> {
  const fetchLevelInfo = async () => {
    setLoading(true)
    axios.get(`https://tgrcode.com/mm2/level_info/${result}`)
    .then(response => setLevelInfo(response.data))
    .catch(err => console.error(err))
    setLoading(false)
  }
  fetchLevelInfo();
},[result]);

useEffect(() => {
  axios.get(`https://trgcode.com/mm2/level_thunbnail/${result}`)
    .then(response => setLevelThumb(response))
    .catch(err => console.error(err))
}, [result])

console.log("THIS IS LEVEL THUMB", levelThumb)


if (loading) return (
  <div className="spinner_container">
    <img className="spinner" src={mario} alt="spinner"/>
  </div>
)

  return (
    <div className="search">
      <div className="search__container">
        <h3>Enter Course ID:</h3>
        <input
          className="search__input"
          placeholder={"WQV126GNF"}
          onChange={(e) => setResult(e.target.value)}
          value={result}
          type="text"
          minlength="9"
          maxlength="9"
          />
        <button className="search__button">Submit</button>
      </div>
      <div className="search__container">
        <h3>Enter Maker ID:</h3>
        <input
          className="search__input"
          placeholder="code without dashes"
          type="text" />
        <button className="search__button">Submit</button>
      </div>
      {result.length === 9 && <Results result={levelInfo} thumb={levelThumb}/>}
    </div>
  )
}

export default Search
