import React, {Component} from 'react';
import './NewFollowers.css'

class NewFollowers extends Component {
    render() {
        return (
            <div className="container " >
                <div className="card data-container" >
                    <div className="profileImage" style={{backgroundImage : "url(" + this.props.user.imageProfile + ")"}}></div>
                    <div className="user"><span style={{color : "red"}}><b>{this.props.user.username}</b> Started Following You</span></div>
                    <a className="btn btn-primary button" href="#">OK</a>
                </div>
            </div>
        );
    }
}
export default NewFollowers