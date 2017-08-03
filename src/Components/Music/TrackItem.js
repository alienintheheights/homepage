
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Audio from 'react-audioplayer'

class TrackItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillUnmount() {
        // This code can only be able to execute when the audio component is already mounted
       ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
    }

    render() {
        const { track } = this.props
        const playlist = [{
            name: track.name,
            src: track.src
        }]
        return (
            <div className="trackWrapper">
                <Audio
                    width={300}
                    height={300}
                    autoPlay={false}
                    playlist={playlist}
                    ref={audioComponent => { this.audioComponent = audioComponent; }}
                />
                <div className="trackInfo">
                   {track.comment}
                </div>
            </div>
        );
    }

}

export default TrackItem