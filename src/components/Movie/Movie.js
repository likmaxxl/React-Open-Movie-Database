import React from 'react'
import PropTypes from 'prop-types'
import MoveInformations from './MoveInformations'
import style from './style.module.css'
import {Link} from 'react-router-dom'

const Movie = ({moviesDataHomepage,closeBtn}) => {

  return (
<>
<div id={style.movie}>
  <div className={`${style.closeBtn}`} onClick={closeBtn}>
    <i class="fa-solid fa-xmark"></i>
  </div>
<div className="container">
    <article className={`${style.bounceInUp}`}>
<div className={style.image}>
  {
    moviesDataHomepage&&moviesDataHomepage.poster==="N/A"?
    <div className={style.noImage}>No Image</div>: <img src={moviesDataHomepage&&moviesDataHomepage.poster} alt={moviesDataHomepage&&moviesDataHomepage.Title}/>

  }
</div>
<div className={style.movieTitle}>
  <div className={style.rank}><span><i className="fa-solid fa-star"></i></span>{moviesDataHomepage&&moviesDataHomepage.rating}</div>
<h4>{moviesDataHomepage&&moviesDataHomepage.title}</h4>
<Link to={`/informations/${moviesDataHomepage.title}`} className={style.btnFlip} data-back="Read More" data-front="More Info"></Link>
</div>
    </article>


</div>
</div>
</>
  )
}

export default Movie
