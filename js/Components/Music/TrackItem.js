
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Audio from 'react-audioplayer'

class TrackItem extends Component {

    clickHandler() {
        this.props.mouseOverHandler(this.audioComponent)
    }

    componentWillUnmount() {
        // This code can only be able to execute when the audio component is already mounted
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'))

    }

    render() {
        const { track, registerAudioPlayer, autoPlay } = this.props
        const playlist = [{
            name : track.name,
            src  : track.src
        }]
        const me = this
        return (
            <div className="trackWrapper" onClick={this.clickHandler.bind(this)}>
                <Audio
                    width={300}
                    height={300}
                    autoPlay={autoPlay}
                    playlist={playlist}
                    ref={audioComponent => {
                        this.audioComponent = audioComponent
                    }}
                />
            </div>
        )
    }

}

export default TrackItem