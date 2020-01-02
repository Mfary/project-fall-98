import React, {Component} from 'react'


class profile extends Component {
    render() {
        return (
            <div className="card-body">
                <img className="col-3 img" src={this.props.image} alt=""/>
                <h2 className="card-title">{this.props.name}</h2>
                <div className="row">
                    <div className="col-3 item">
                        <a href="">
                            {this.props.followers}<br/>
                            follwers
                        </a>
                    </div>
                    <div className="col-3 item">
                        <a href="">
                            {this.props.following}<br/>
                            follwing
                        </a>
                    </div>
                    <div className="col-3 item">
                        {this.props.posts}<br/>
                        posts
                    </div>
                    <div id="posts"></div>
                </div>
            </div>
        )
    }
}
export default profile