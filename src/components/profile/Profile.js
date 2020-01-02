import React, {Component} from 'react'


class profile extends Component {
    render() {
        console.log(this.props.user.user)
        return (
            <div className="card-body">
                <img className="col-3 img" src={this.props.user.user.image} alt=""/>
                <h2 className="card-title">{this.props.user.user.name}</h2>
                <div className="row">
                    <div className="col-3 item">
                        <a href="/profile/followers">
                            {this.props.user.followers.length}<br/>
                            follwers
                        </a>
                    </div>
                    <div className="col-3 item">
                        <a href="/profile/following">
                            {this.props.user.user.followingUser.length + this.props.user.user.followingChannel}<br/>
                            following
                        </a>
                    </div>
                    <div className="col-3 item">
                        {this.props.user.user.posts}<br/>
                        posts
                    </div>
                    <div id="posts"></div>
                </div>
            </div>
        )
    }
}
export default profile