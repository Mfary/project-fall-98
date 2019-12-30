import React, {Component} from 'react'
import "./style.css"

class MyProfile extends Component {
    render() {
        return (
            <div className="container">
                <img src={this.props.image} alt={""}/>
                <h1>{this.props.name}</h1>
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
                <button>Edit profile</button>
                <button>Change password</button>
                <button>Post</button>
                <div id="posts"></div>
            </div>
        )
    }
}
export default MyProfile