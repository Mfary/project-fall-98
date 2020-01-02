import React, {Component} from 'react'
import "./style.css"
import data from "../../static/jsons/profiles"
import UserCard from "./UserCard";
import ch from "../../static/jsons/channels"
import ChannelCard from "./ChannelCard";

class Followers extends Component {
    state = {
        users: [],
        channels: [],
    }

    componentDidMount() {
        console.log(data)
        this.setState({
            users: data,
            channels: ch
        })

    }

    render() {
        return (
            <div className="container">
                <h3>Users</h3>
                <hr/>
                {this.state.users.map((user) => {
                    if (user.id in this.props.user.followingUser)
                        return (
                            <UserCard user={user}/>
                        )
                })}
                <h3>Channels</h3>
                <hr/>
                {this.state.channels.map((channel) => {
                    if (this.props.user.id in this.channels.member)
                        return (
                            <ChannelCard channel={channel}/>
                        )
                })}
            </div>
        )
    }
}

export default Followers