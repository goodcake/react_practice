import React, { Component } from 'react';

class Bio extends Component{
    render (){
        return(
            <div className="bio">
                <h1 className="name">{this.props.name}</h1>
                <h2 className="location">{this.props.location}</h2>
                <div className="occupation">
                    <p>Protecting Freedom @ onemonthedu</p>
                </div>
            </div>
        )
    }
}

export default Bio;