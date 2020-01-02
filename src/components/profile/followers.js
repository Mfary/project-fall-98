import React, {Component} from 'react'
import "./style.css"
import UserCard from "./UserCard";
import data from "../../static/jsons/profiles";

class Followers extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        console.log(data)
        this.setState({
            users: data
        })

    }
    render() {
        return (
            <div className="container">
                <h2>Follwers</h2>
                {this.state.users.map((user) => {
                    if (user.id in this.props.user.user.followers)
                        return (
                            <UserCard user={{user :user}}/>
                        )
                })}

            </div>
        )
    }
}

export default Followers