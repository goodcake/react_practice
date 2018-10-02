import React, { Component } from 'react';
import Bio from "./Bio";
import Updates from "./Updates";

let person = {
    name: 'Superman',
    location: 'Okinawa, Japan',
    occupation: {
        title: 'Marketing Intern',
        employer: '@voicetube'
    },
    photo: './images/me.png',
    updates: [
        {
            platform: 'twitter',
            status: 'I\'m happy, hope you\'re happy too!'
        },
        {
            platform: 'twitter',
            status: 'All about learning is just trying to become a better version of ourselves.'
        },
        {
            platform: 'twitter',
            status: 'Feel excited to join this competition!!!!!'
        },
        {
            platform: 'facebook',
            status: 'If you’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
        }
    ]
};

class Card extends Component{
    render (){
        return(
            <div className="card">
                <Bio name={person.name} location={person.location} />
                <Updates />
            </div>

        )
    }
}

export default Card;