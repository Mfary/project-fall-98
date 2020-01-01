import React, {Component} from 'react'
import Follow from "./follow";
import Edit from "./edit";
import "./style.css"

class Profile extends Component {
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
                        <div className="card-body">
                            <img className="col-3 img" src={this.props.image} alt=""/>
                            <h2 className="card-title">{this.props.name}</h2>
                            <div className="row">
                                <div className="col-3 item">
                                    <a href="">
                                        {this.props.followers}<br/>
                                        follwers
                                    </a>
                                </div>
                                <div className="col-3 item">
                                    <a href="">
                                        {this.props.following}<br/>
                                        follwing
                                    </a>
                                </div>
                                <div className="col-3 item">
                                    {this.props.posts}<br/>
                                    posts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="posts"></div>
            </div>
        )
    }
}

export default Profile