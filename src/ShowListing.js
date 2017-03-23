import React, { Component } from 'react'
import momentTz from 'moment-timezone';

class ShowListing extends Component {
    render() {
        const { show } = this.props
        const dateIs = momentTz(show.date).tz('America/Chicago').format("MMMM Do YYYY h:mm a")
        const venueLink = (show.venueUrl) ? (<a href={show.venueUrl}>{show.venue}</a>) : show.venue
        return (
            <div className="show-listing">
                <b>{show.event}</b><br/>
                {venueLink}<br/>
                <small>{dateIs }</small><br/>
            </div>
        )
    }
}

export default ShowListing