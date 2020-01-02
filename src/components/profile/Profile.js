import React, {Component} from 'react'


class profile extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="card-body">
                <img className="col-3 img" src={this.props.image} alt=""/>
                <h2 className="card-title">{this.props.name}</h2>
                <div className="row">
                    <div className="col-3 item">
                        <a href="/profile/followers">
                            {this.props.user.followers.length}<br/>
                            follwers
                        </a>
                    </div>
                    <div className="col-3 item">
                        <a href="/profile/following">
                            {this.props.user.followingUser.length + this.props.user.followingChannel}<br/>
                            following
                        </a>
                    </div>
                    <div className="col-3 item">
                        {this.props.user.posts}<br/>
                        posts
                    </div>
                    <div id="posts"></div>
                </div>
            </div>
        )
    }
}
export default profile