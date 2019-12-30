import React, {Component} from 'react'
import "./style.css"

class Profile extends Component {
    render() {
        let button;
        if(this.props.folloew)
            button = <button>unfollow</button>;
        else
            button = <button>follow</button>;
        return (
            <div className="container">
                <img src={this.props.image} alt=""/>
                <h1>{this.props.name}</h1>
                { button }
                <table>
                    <thead>
                    <tr>
                        <th>
                            follwers
                        </th>
                        <th>
                            follwing
                        </th>
                        <th>
                            posts
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            { this.props.followers }
                        </td>
                        <td>
                            { this.props.foll0wing }
                        </td>
                        <td>
                            { this.props.posts }
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="posts"></div>
            </div>
        )
    }
}
export default Profile