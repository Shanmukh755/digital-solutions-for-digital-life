import Home from './components/Home';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import WebDesigning from './components/WebDesigning';
import Seo from './components/Seo'
import SocialMedia from './components/SocialMedia'
import DigitalMarketing from './components/DigitalMarketing'
import GraphicDesign from './components/GraphicDesign'
import ContentStrategy from './components/ContentStrategy'
import Requests from './components/Requests';
import NotFound from './components/NotFound';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';


const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' Component={Signup} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/' Component={Home} />
        <Route exact path='/web-designing' Component={WebDesigning} />
        <Route exact path="/seo" Component={Seo} />
        <Route exact path='/social-media-marketing' Component={SocialMedia} />
        <Route exact path='/digital-marketing' Component={DigitalMarketing} />
        <Route exact path='/graphic-design' Component={GraphicDesign} />
        <Route exact path='/content-strategy' Component={ContentStrategy} />
        <Route exact path='/requests' Component={Requests} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
