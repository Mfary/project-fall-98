import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from "./template_compnent/Navbar";
import Home from "./components/Home";
import './App.css';
import Sign from './components/Sign.js'
import {Route,BrowserRouter} from "react-router-dom";
import SignUp from "./components/SignUp";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/" render={() => <Home/>}/>
                <Route  path="/sign" render={() => <Sign/>}/>
                <Route  path="/signUp" render={() => <SignUp/>}/>
            </BrowserRouter>


        )
    }


}

export default App;
