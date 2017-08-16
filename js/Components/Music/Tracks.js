import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { registerAudioPlayer } from '../../actions'

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
            src: 'music/round.mp3',
            img: playlistPic,
            name: 'Newsy',
            comment: "Layered piano parts played in rounds. With handclaps.",
            id: "1"
        },
        {
            src: 'music/mysterious.mp3',
            img: playlistPic,
            name: 'Mysterious',
            comment: "If Tom Waits did the theme...",
            id: "2"
        },
        {
            src: 'music/snarky.mp3',
            img: playlistPic,
            name: 'Snarky',
            comment: "If Snarky Puppy did the theme...",
            id: "3"
        },
        {
            src: 'music/solaris.mp3',
            img: playlistPic,
            name: 'Solaris',
            comment: "Soundtracky",
            id: "4"
        },
        {
            src: 'music/neosoul.mp3',
            img: playlistPic,
            name: 'Esperanza',
            comment: "If Esperanza did the theme...",
            id: "5"

        },
        {
            src: 'music/world.mp3',
            img: playlistPic,
            name: 'World',
            comment: "World Choir",
            id: "6"
        },
        {
            src: 'music/theme74.mp3',
            img: playlistPic,
            name: 'Peppy Television',
            comment: "7/4 Piano Intro theme",
            id: "7"
        },
        {
            src: 'music/jazz.mp3',
            img: playlistPic,
            name: 'Jazz Version, Classic NPR',
            comment: "Classic NPR Jazz style",
            id: "8"
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
                            <h3>Potential new themes</h3>
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
    select, { registerAudioPlayer }
)(Tracks)