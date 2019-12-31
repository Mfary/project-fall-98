import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from "./template_compnent/Navbar";
import './App.css';
import Sign from './components/Signs/Sign.js'
import {Route, BrowserRouter} from 'react-router-dom'
import SignUp from "./components/Signs/SignUp";
import Topic from "./components/Topic/Topic";
import FirstPage from "./components/FirstPage";
import PostMaker from "./components/Posts/PostMaker";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route path="/"/>
                <Route exact path="/sign" render={() => <Sign/>}/>
                <Route exact path="/signUp" render={() => <SignUp/>}/>
                <Route exact path="/Home" render={() => <FirstPage/>}/>
                <Route exact path="/PostMaker" render={() => <PostMaker/>}/>


            </BrowserRouter>


        )
    }


}

export default App;
