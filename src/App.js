import './App.css';
import MoviesApp from './components/MoviesApp'
import MoveInformations from './components/Movie/MoveInformations'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

<Router>
<Routes>
  <Route path="/" element={<MoviesApp/>}/>
<Route path="/informations/:title" element={<MoveInformations/>}/>

</Routes>
</Router>



    </div>
  );
}

export default App;
