import React, {Component} from 'react'
import "./style.css"
import Follow from "./follow";
import Edit from "./edit";

class Profile extends Component {
    render() {
        let button;
        if (this.props.me)
            button = <Edit/>
        else
            button = <Follow follow={this.props.follow}/>
        return (
            <div className="container">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt=""/>
                    <div className="card-body">
                        <h2 className="card-title">{this.props.name}</h2>
                        {button}
                        <div className="col-4">
                            follwers
                        </div>
                        <div className="col-4">
                            follwing
                        </div>
                        <div className="col-4">
                            posts
                        </div>
                        <div className="col-4">
                            {this.props.followers}
                        </div>
                        <div className="col-4">
                            {this.props.foll0wing}
                        </div>
                        <div className="col-4">
                            {this.props.posts}
                        </div>
                    </div>
                </div>
                <div id="posts"></div>
            </div>
        )
    }
}

export default Profile