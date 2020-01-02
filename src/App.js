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
import NotificationPage from "./components/NotificationPage";
import TopicPage from "./components/Topic/TopicPage";
import ProfileContainer from "./components/profile/ProfileContainer";
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
                    <Route exact path="/PostMaker" render={() => <PostMaker/>}></Route>
                    <Route path="/topic/:topic_id"  component={TopicPage}></Route>
                    <Route path="/profile"  render={() => <ProfileContainer name="Ali" followers="33.5K" following="4.1K" posts="10k" me={{checked:true}}/>}></Route>
                    <Route path="/notification" render={() => <NotificationPage/>} ></Route>
                </Switch>


            </BrowserRouter>


        )
    }


}

export default App;
