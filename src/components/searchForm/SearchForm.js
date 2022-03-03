import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.css'


const SearchForm = ({formSearch,searchChange,searchClick,resetBtn,titleAlert}) => {
  return (
<>
<div id={style.moviesSearchForm}>
<form action="#" className={style.formSearch}>
  <div className={style.formRow}>
  <div className={style.label}>Title</div>

<input type="text" autoComplete="off" name="inputTitle" value={formSearch.inputTitle} onChange={searchChange}/>
  <p class={style.titleAlert}>{titleAlert}</p>
</div>
<div className={style.formRow}>
<div className={style.label}>Year</div>
<input type="number" name="inputYear" value={formSearch.inputYear} onChange={searchChange}/>
</div>
<div className={style.buttons}>
  <button className={style.searchMovie} onClick={searchClick}>Search</button>
<button className={style.resetSearch} onClick={resetBtn}>Reset</button>
</div>
</form>
</div>
</>
  )
}

export default SearchForm
