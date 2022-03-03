import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import SearchForm from './searchForm/SearchForm'
import Movie from './Movie/Movie'
import axios from 'axios';


const MoviesApp = (props) => {
const [movie,setMovie]=useState([])
const [loading, setLoading] = useState(true);
const [moviesDataHomepage,setMoviesDataHomepage]=useState({
  title:"",
  rating:"",
  poster:""
})





const [formSearch,setFormSearch]=useState({//inpust field
  inputTitle:"",
  inputYear:""
})
const [clickedValue,setClickedValue]=useState({//currrent values when users click on search
  title:'',
  year:''
})

  useEffect(() => {
    setLoading(true);
    axios.get(`http://www.omdbapi.com/?t=${clickedValue.title}&y=${clickedValue.year}&apikey=1f39fc4e`).then((res) => {
      const movieData = res;
      setMovie(movieData.data);


const movieHomeVar={
  title:movieData.data.Title,
  rating:movieData.data.Ratings&&movieData.data.Ratings.length>=0?movieData.data.Ratings[0].Value:"NA/NA",
  poster:movieData.data.Poster
}
console.log(clickedValue.title)
   setMoviesDataHomepage(movieHomeVar)


      if(movieData.data.Title){
          setLoading(false);

          const moviesHomepageSet=sessionStorage.setItem('homePageMovie', JSON.stringify(movieHomeVar));
      }

      if(!moviesDataHomepage.title){
    var moviesHomepageSet = JSON.parse(sessionStorage.getItem("homePageMovie"));
        setMoviesDataHomepage(moviesHomepageSet)
      }

console.log(moviesDataHomepage.title!='')
      console.log(clickedValue.title)
console.log(movieData.data.Title)
      setLoading(false);

      });
  }, [clickedValue]);


useEffect(()=>{

},[clickedValue])
console.log(moviesDataHomepage)

/**********SEARCH FORM ON CHANGE****************/
const searchChange=(e)=>{
  const name=e.target.name
  const value=e.target.value
setFormSearch({...formSearch,[name]:value})
}


const [titleAlert,setTitleAlert]=useState()//TITLE ALERT This field must be filed!*

/**********SEARCH BUTTON****************/
const searchClick=(e)=>{

  e.preventDefault()
setClickedValue({
  ...clickedValue,
  title:formSearch.inputTitle,
  year:formSearch.inputYear,

})
if(!formSearch.inputTitle.trim()){
  setTitleAlert('This field must be filed!*')
}else{
    setTitleAlert('')
}

formSearch.inputTitle=''
formSearch.inputYear=''
}

/**********RESET BUTTON******************/
const resetBtn=(e)=>{
  e.preventDefault()
  formSearch.inputTitle=''
  formSearch.inputYear=''
  setMoviesDataHomepage([])
  const moviesHomepageSet=sessionStorage.setItem('homePageMovie', JSON.stringify([]));
}


/*******CLOSE BUTTON X MOVIE HOMEPAGE************/
const closeBtn=(e)=>{
  e.preventDefault()
setMoviesDataHomepage([])
const moviesHomepageSet=sessionStorage.setItem('homePageMovie', JSON.stringify([]));
}



  return (
<>
  <div id="moviesApp">

    <header>
      <h1><span><i className="fa-solid fa-film"></i></span>OMDb API<span> The Open Movie Database</span><span><i className="fa-solid fa-clapperboard"></i></span> </h1>
    <h3>The OMDb API is a RESTful web service to obtain movie information</h3>
    </header>
    <SearchForm
      titleAlert={titleAlert}
      formSearch={formSearch}
      searchChange={searchChange}
      searchClick={searchClick}
      resetBtn={resetBtn}
    />
{
    loading?<div class="load-container">
      <div class="loader"></div>
    </div>:
    moviesDataHomepage&&moviesDataHomepage.title?<Movie closeBtn={closeBtn} moviesDataHomepage={moviesDataHomepage}/>:<div className="homePageInfo">
<div className="iconHomeInfo"><i class="fa-solid fa-circle-exclamation"></i></div>
<h3>Please enter proper movie Title and click on the search Button </h3>
<p>You can also enter the year of the movie but a proper movie title is required </p>
  </div>
}
  </div>
</>

  )
}

export default MoviesApp
