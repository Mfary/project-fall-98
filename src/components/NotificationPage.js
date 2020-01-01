import React, {Component} from 'react';
import NewFollowers from "./NewFollowers/NewFollowers";
import data from "../static/jsons/newFollowers"

class NotificationPage extends Component {
    state = {
        usersData : []
    }

    componentDidMount() {
        console.log(data)
        this.setState({
            usersData : data
        })
    }

    render() {
        return(
            <div className="container">
                {this.state.usersData.map((user) => {
                       return(
                           <NewFollowers user={user}/>
                       )
                   })}
            </div>
        )
    }
}
export default NotificationPage