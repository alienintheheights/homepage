import React, { Component } from 'react'

import TrackItem from './TrackItem'


class Tracks extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        const playlistPic = "img/engines.png"
        const playlist = [
            {
                src: 'music/round.mp3',
                img: playlistPic,
                name: 'Piano Round: "Newsy"',
                comment: "Newsy"
            },
            {
                src: 'music/jazz.mp3',
                img: playlistPic,
                name: 'Jazz Version, Classic NPR',
                comment: "Classic NPR Jazz style"
            },
            {
                src: 'music/mysterious.mp3',
                img: playlistPic,
                name: 'Mysterious',
                comment: "Mysterious"
            },
            {
                src: 'music/theme74.mp3',
                img: playlistPic,
                name: 'Theme in 7/4',
                comment: "Peppy"
            },
            {
                src: 'music/neosoul.mp3',
                img: playlistPic,
                name: 'Neo-Soul',
                comment: "A la Esperanza, Me'Shell etc"
            }
        ]

        return (
            <section className="musicWrapper" id="trackWrapper">
                <div className="musicHeader">
                    Potential new themes for Engines
                    <img className="img-responsive pic--portrait" src="img/engines.png" alt="Engines" />
                </div>

                <div className="musicPlayer">
                    {playlist.map(function (value, index) {
                        return (<TrackItem track={value} key={index} />)
                    })}
                </div>
            </section>
        );
    }

}


export default Tracks