import React, { Component } from 'react'

import TrackItem from './TrackItem'


class Tracks extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    // TODO replace with API
    _getImg = () => "img/engines.png"

    // TODO replace with API
    _getPlaylist = (playlistPic) => [
        {
            src: 'music/round.mp3',
            img: playlistPic,
            name: 'Piano Round: "Newsy"',
            comment: "#1: Happy/Newsy"
        },
        {
            src: 'music/jazz.mp3',
            img: playlistPic,
            name: 'Jazz Version, Classic NPR',
            comment: "#2: Classic NPR Jazz style"
        },
        {
            src: 'music/mysterious.mp3',
            img: playlistPic,
            name: 'Mysterious',
            comment: "#3: Mysterious"
        },
        {
            src: 'music/theme74.mp3',
            img: playlistPic,
            name: 'Theme in 7/4',
            comment: "#4: Peppy Television"
        },
        {
            src: 'music/neosoul.mp3',
            img: playlistPic,
            name: 'Neo-Soul',
            comment: "#5: If Esperanza did the theme..."
        },
        {
            src: 'music/snarky.mp3',
            img: playlistPic,
            name: 'Snarky',
            comment: "#6: If Snarky Puppy did the theme..."
        }
    ]

    render() {
        const playlist = this._getPlaylist(this._getImg())

        return (
            <section className="musicWrapper" id="trackWrapper">
                <div className="musicPlayer">
                    <h3>Six potential new themes</h3>
                    
                    {playlist.map(function (value, index) {
                        return (<TrackItem track={value} key={index} />)
                    })}
                    <img className="img-responsive pic--portrait" src={this._getImg()} alt="Engines" />
                </div>
            </section>
        );
    }

}


export default Tracks