import React from 'react'

import "../styles/Results.css"


const Results = ({ result, thumb }) => {
  
  return (
    <div className="results">
      <div className="results__container">
        <img className="results__thumb" src={`https://tgrcode.com/mm2/level_thumbnail/${result.course_id}`}alt="" />
        <div>
          <h2>course name: {result.name}</h2>
          <h3>course id: {result.course_id}</h3>
        </div>

      </div>
    </div>
  )
}

//	PHP-GYT-VJG , 5YG-7DN-PGG

export default Results
