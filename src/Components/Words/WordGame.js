import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getNextWord, getLastWord, fetchWords } from '../../actions'
import WordItem from './WordItem'

class WordGame extends Component {
    constructor(props) {
        super(props);
        this.getNextWord = this.getNextWord.bind(this);
        this.getLastWord = this.getLastWord.bind(this);
    }

    componentDidMount() {
        if (!this.props.data || this.props.data.words.length === 0) {
             this.props.fetchWords()
        } 
    }

    getNextWord(e) {
        if (e) e.preventDefault()
        this.props.getNextWord()
    }

    getLastWord(e) {
        if (e) e.preventDefault()
        this.props.getLastWord()
    }

    render() {
        const { wod } = this.props.data
        var me = this
        return (
            <section className="" id="word">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Crossword Vocab</h2> <small>I made a little game out of my growing collection of crossword words. Click the hint link to reveal letters.</small>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 text-center">
                            <div className="panel panel-default">
                                <div className="panel-body game-panel">
                                    {(wod && wod.definition) ? (<WordItem selectedWord={wod} {...me.props} />) : (<div className="loader"/>)}
                                </div>
                                <div className="panel-footer">
                                    <div className="btn-group" role="group" aria-label="XWord Controls">
                                        <button type="button" className="btn btn-default" onClick={this.getLastWord}>Last Word</button>
                                        <button type="button" className="btn btn-default" onClick={this.getNextWord}>Next Word</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

WordGame.propTypes = {
    data: PropTypes.object
}


function select(state) {
    return {
        data: state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { getNextWord, getLastWord, fetchWords }
)(WordGame)