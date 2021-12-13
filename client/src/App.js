import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Navbar';
import {Route, Switch} from "react-router-dom"
import Login from './componant/Login';
import Home from './componant/Home';
import About from './componant/About';
import Register from './componant/Register';
import Contact from './componant/Contact';
import Error from './componant/Error';
import "bootstrap/dist/css/bootstrap.css"
import { createContext } from 'react';


function App() {

  return (<>

<Navbar/>
<Switch>
<Route path="/login"><Login/></Route>
<Route path="/about"  ><About/> </Route>
<Route path="/register"  ><Register/> </Route>
<Route path="/contact"  ><Contact/> </Route>
<Route path="/"  exact ><Home/> </Route>
<Route ><Error/></Route>
</Switch>

    </>);
  
}

export default App;
