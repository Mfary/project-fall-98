import React, {Component} from 'react'
import Follow from "./follow";
import Edit from "./edit";
import "./style.css"
import {Route} from "react-router-dom";
import Profile from "./Profile";
import ChangePassword from "./changePass";
import Post from "./post";

class ProfileContainer extends Component {
    render() {
        let temp;
        if (!this.props.me.checked)
            temp = <Follow follow={this.props.follow}/>
        else
            temp = <Edit/>
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-8" style={{margin: "auto"}}>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            {temp}
                        </nav>
                        <Route exact path="/profile"  render={() => <Profile name={this.props.name} followers={this.props.followers} following={this.props.following} posts={this.props.posts} />}></Route>
                        <Route exact path="/profile/changepass" render={() => <ChangePassword />}></Route>
                        <Route exact path="/profile/Post" render={() => <Post/>}></Route>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileContainer