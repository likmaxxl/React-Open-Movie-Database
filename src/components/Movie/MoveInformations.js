import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link,useParams,} from 'react-router-dom'
import style from './style.module.css'


const MoveInformations = (props) => {
  const [loading,setLoding]=useState(true)
  const[allMovies,setAllMovies]=useState()
  const {title}=useParams()

useEffect(()=>{
  setLoding(true)
  axios.get(`http://www.omdbapi.com/?t=${title}&y=&apikey=1f39fc4e`).then((res)=>{
    const movieData=res.data
    console.log(movieData)
    setAllMovies(movieData)
  })
    setLoding(false)
},[])


  console.log(title)
    console.log(allMovies)
  return (
  <>
  {
    loading?<div class="load-container">
      <div class="loader"></div>
    </div>:

  <div id={style.moviesInformations}>
    <div className={style.moviesInfoBackgroundGradient} style={{ backgroundImage:`url(${allMovies&&allMovies.Poster})`}}></div>
  <div className={style.movieAllContent}>
<div className={style.movieInfo}>
    <h3>{allMovies&&allMovies.Type}</h3>
  <h1>{title}</h1>

<div className={style.movieMainInfo}>
  <span>{allMovies&&allMovies.Year} </span><span>|</span> <span><i class="fa-solid fa-star"></i>{allMovies&&allMovies.imdbRating}</span> <span>{allMovies&&allMovies.Runtime}</span> <span>|</span> <span>{allMovies&&allMovies.Genre}</span>
</div>
<div className={style.movieMoreInfo}>
{allMovies&&allMovies.Plot}
</div>

<div className={style.movieStarring}>
  <span>Starring: </span>{allMovies&&allMovies.Actors}
</div>
<div className={style.movieAwards}>
<span><i class="fa-solid fa-trophy"></i></span> <span>{allMovies&&allMovies.Awards==="N/A"?"No awards":allMovies&&allMovies.Awards}</span>
</div>

<div className={style.moviesInfoBackBtn}>
  <Link to="/" class={style.moviesInfoBackBtnAbsolute}>
  <span><i class="fa-solid fa-angle-left"></i></span>
  <span><i class="fa-solid fa-angle-left"></i></span>
  <span><i class="fa-solid fa-angle-left"></i></span>
    <span>Back</span>
  </Link>


</div>
</div>
</div>
</div>

  }

  </>
  )
}

export default MoveInformations
