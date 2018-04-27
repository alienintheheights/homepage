import React, { Component } from 'react'
import momentTz from 'moment-timezone'

class ShowItem extends Component {

    handleClick(linkText) {
        window.trackOutboundLink(linkText);
    }

    render() {
        const { show } = this.props
        const dateIs = momentTz(show.show_date_start).tz('America/Chicago').format("dddd MMMM Do YYYY h:mm a")
        const linkHandler = this.handleClick.bind(this, show.venue_url)
        const venueLink = (show.venue_name) ? (<a href={show.venue_url} onClick={linkHandler}>{show.venue_name}</a>) : show.venue_name
        return (
            <div className="show-listing">
                <h4>{show.event_name}</h4>
                <h5>{venueLink} <br /><small>{dateIs}</small></h5>
            </div>
        )
    }
}

export default ShowItem