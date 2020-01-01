import React, {Component} from 'react'
import Follow from "./follow";
import Edit from "./edit";

class Profile extends Component {
    render() {
        let button;
        if (this.props.me.checked)
            button = <Edit/>
        else
            button = <Follow follow={this.props.follow}/>
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-8" style={{ margin : "auto"  }}>
                        <img className="card-img-top" src={this.props.image} alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">{this.props.name}</h2>
                            {button}
                            <div className="row">
                                <div className="col-4">
                                    follwers
                                </div>
                                <div className="col-4">
                                    follwing
                                </div>
                                <div className="col-4">
                                    posts
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    {this.props.followers}
                                </div>
                                <div className="col-4">
                                    {this.props.following}
                                </div>
                                <div className="col-4">
                                    {this.props.posts}
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