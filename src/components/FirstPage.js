import React, {Component} from 'react';
import Topic from "./Topic/Topic";
import data from "../static/jsons/topic"

class FirstPage extends Component {
    state = {}

    render() {
        return (
            <div>
                {data.map((topic) => {
                    console.log(topic)
                    return (
                        <Topic topicObject={topic} key={topic.id}/>

                    )

                })}
            </div>
        )
    }
}


export default FirstPage