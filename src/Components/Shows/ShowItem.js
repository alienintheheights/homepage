import React, { Component } from 'react'
import momentTz from 'moment-timezone'

class ShowItem extends Component {

    handleClick(linkText) {
        window.trackOutboundLink(linkText);
    }

    render() {
        const { show } = this.props
        const dateIs = momentTz(show.date).tz('America/Chicago').format("dddd MMMM Do YYYY h:mm a")
        const linkHandler = this.handleClick.bind(this, show.venueUrl)
        const venueLink = (show.venueUrl) ? (<a href={show.venueUrl} onClick={linkHandler}>{show.venue}</a>) : show.venue
        return (
            <div className="show-listing">
                <h4>{show.event}</h4>
                <h5>{venueLink} <br/><small>{dateIs}</small></h5>
            </div>
        )
    }
}

export default ShowItem