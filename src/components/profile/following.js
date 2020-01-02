import React, {Component} from 'react'
import "./style.css"
import data from "../../static/jsons/profiles"
import UserCard from "./UserCard";
import ch from "../../static/jsons/Channels"
import ChannelCard from "./ChannelCard";

class Following extends Component {
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
                <h2>Following</h2>
                <br />925627
                <h3>Users</h3>
                <hr/>
                {this.state.users.map((user) => {
                    if (this.props.user.followingUsers.includes(user.id))
                        return (
                            <UserCard user={ user }/>
                        )
                })}
                <h3>Channels</h3>
                <hr/>
                {this.state.channels.map((channel) => {
                    if (this.props.user.followingChannels.includes(channel.id) )
                        return (
                            <ChannelCard channel={ channel }/>
                        )
                })}
            </div>
        )
    }
}

export default Following