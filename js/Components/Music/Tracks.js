import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TrackItem from './TrackItem'


class Tracks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentId: 0,
            autoPlay: false
        }
    }

    // TODO replace with API
    _getImg = () => "img/engines.png"

    // TODO replace with API
    _getPlaylist = (playlistPic) => [
        {
            src: 'music/bigorchestra.mp3',
            img: playlistPic,
            name: 'Big Orchestra',
            comment: "Faux Orchestra Looping and Modulating"
        },
        {
            src: 'music/bigpiano.mp3',
            img: playlistPic,
            name: 'Big Piano',
            comment: "Piano Ostinatos"
        },
        {
            src: 'music/mysterious.mp3',
            img: playlistPic,
            name: 'Mysterious',
            comment: "Sort of Tom Waits meets Cliff Martinez",
            id: "2"
        },
        {
            src: 'music/jazz.mp3',
            img: playlistPic,
            name: 'Jazz Version',
            comment: "Jazz bossa with guitar and vibes",
            id: "8"
        },
        {
            src: 'music/solaris.mp3',
            img: playlistPic,
            name: 'Solaris',
            comment: "Stranger Things + Solaris"
        },
        {
            src: 'music/police.mp3',
            img: playlistPic,
            name: '70s Beat',
            comment: "Reggatta",
            id: "10"
        },
        {
            src: 'music/movie.mp3',
            img: playlistPic,
            name: 'Movie',
            comment: "Movie piano"
        },
        {
            src: 'music/round.mp3',
            img: playlistPic,
            name: 'Newsy',
            comment: "Layered piano parts played in rounds. With handclaps."
        },
        {
            src: 'music/snarky.mp3',
            img: playlistPic,
            name: 'Snarky',
            comment: "A Snarky Puppy inspired theme."
        },
        {
            src: 'music/world.mp3',
            img: playlistPic,
            name: 'World',
            comment: "Choir. Weird."
        }
    ]

    changeTrack(trackNum) {
        this.setState({
            currentId: trackNum,
            autoPlay: true
        })
    }

    render() {
        const { currentId, autoPlay } = this.state

        const playlist = this._getPlaylist(this._getImg())
        const currentTrack = playlist[currentId]
        const me = this


        return (
            <section className="musicWrapper" id="trackWrapper">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="musicPlayer">
                            <h3>Potential new themes <small>last update, 8/20/17, 8pm</small></h3>
                            <TrackItem
                                track={currentTrack}
                                key={currentId}
                                autoPlay={autoPlay}
                                {...me.props} />
                            {playlist.map(function (value, index) {
                                const selectorClassName = (value.name === currentTrack.name) ? "track-selector-active" : "track-selector" 
                                return (
                                    
                                    <div onClick={me.changeTrack.bind(me, index)}  className={selectorClassName}>
                                        <h4>
                                            <span className="glyphicon glyphicon-bell spacer" />
                                            {value.name}
                                        </h4>
                                        <div className="track-info">
                                            {value.comment}
                                        </div>
                                    </div>)
                            })}
                            <img className="img-responsive pic--portrait" src={this._getImg()} alt="Engines" />
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Tracks.propTypes = {
    data: PropTypes.object,
    dispatcher: PropTypes.func
}


function select(state) {
    return {
        data: state
    }
}


export default connect(
    select, {  }
)(Tracks)