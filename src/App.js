import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from "./template_compnent/Navbar";
import './App.css';
import Sign from './components/Signs/Sign.js'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import SignUp from "./components/Signs/SignUp";
import TopicThumbnail from "./components/Topic/TopicThumbnail";
import FirstPage from "./components/FirstPage";
import PostMaker from "./components/Posts/PostMaker";
import TopicPage from "./components/Topic/TopicPage";
import Profile from "./components/profile/Profile";
import Post from "./components/profile/post";
import ChangePassword from "./components/profile/changePass";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>

                    <Route path="/"></Route>
                <Switch>
                    <Route exact path="/sign" render={() => <Sign/>}></Route>
                    <Route exact path="/signUp" render={() => <SignUp/>}></Route>
                    <Route exact path="/Home" render={() => <FirstPage/>}></Route>
                    <Route exact path="/changepass" render={() => <ChangePassword />}></Route>
                    <Route exact path="/PostMaker" render={() => <PostMaker/>}></Route>
                    <Route exact path="/Post" render={() => <Post/>}></Route>
                    <Route path="/topic/:topic_id"  component={TopicPage}></Route>
                    <Route path="/profile"  render={() => <Profile name="Ali" followers="33.5K" following="4.1K" posts="10k" me={{checked:true}}/>}></Route>
                </Switch>


            </BrowserRouter>


        )
    }


}

export default App;
