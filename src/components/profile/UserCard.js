import React, {Component} from 'react'
import "./style.css"

class UserCard extends Component {
    render() {
        return (
            <div className="card col-md-3">
                <img className="card-img-top" src={this.props.user.image} alt="User image"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.name}</h5>
                </div>
            </div>
        )
    }
}
export default UserCard