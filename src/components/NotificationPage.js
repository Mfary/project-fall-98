import React, {Component} from 'react';
import NewFollowers from "./NewFollowers/NewFollowers";
import data from "../static/jsons/newFollowers"
import newComments from '../static/jsons/NewComments'
import NewComment from "./NewComment";

class NotificationPage extends Component {
    state = {
        usersData : [],
        newComments:[]
    }

    componentDidMount() {
        console.log(data)
        this.setState({
            usersData : data,
            newComments : newComments
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
                {this.state.newComments.map((comment) => {
                    return(
                        <NewComment comment={comment}/>
                    )
                })}
            </div>
        )
    }
}
export default NotificationPage