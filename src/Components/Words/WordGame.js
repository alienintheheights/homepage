import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getNextWord, getLastWord, fetchWords } from '../../actions'
import WordItem from './WordItem'

class WordGame extends Component {
    constructor(props) {
        super(props);
        this.getNextWord = this.getNextWord.bind(this)
        this.getLastWord = this.getLastWord.bind(this)
        this.markWord = this.markWord.bind(this)
        this.clearList = this.clearList.bind(this)
        var m = JSON.parse(localStorage.getItem('markedWords'))
        console.log(m);
        this.state = {
            marked: m || []
        }
    }

    componentDidMount() {
        if (!this.props.data || this.props.data.words.length === 0) {
            this.props.fetchWords()
        }
    }


    clearList(e) {
        if (e) e.preventDefault()
        localStorage.setItem('markedWords', null)
        this.setState({
            marked: []
        })
    }

    removeItem(selectedWord) {
        const { marked } = this.state
        const { wod } = this.props.data
        let newMark = marked.filter(function (candidate) {
            return candidate.word !== selectedWord;
        });
        localStorage.setItem('markedWords', JSON.stringify(newMark));
        this.setState({
            marked: newMark
        })
    }

    hasWord(word) {
        const { marked } = this.state
        const { wod } = this.props.data
        let idx = marked.findIndex(curwod => curwod.word === wod.word)
        return (idx === -1) ? false : true
    }

    markWord(e) {
        if (e) e.preventDefault()
        const { marked } = this.state
        const { wod } = this.props.data
        let newMark = Object.assign([], marked) // copy
        if (!this.hasWord(wod)) {
            newMark.push(wod)
            localStorage.setItem('markedWords', JSON.stringify(newMark));
        }
        this.setState({
            marked: newMark
        })
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
        const { marked } = this.state
        const { wod } = this.props.data
        const hasItems = (marked.length !== 0);
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
                                    {(wod && wod.definition) ? (<WordItem isMarked={me.hasWord(wod.word)} selectedWord={wod} {...me.props} />) : (<div className="loader" />)}
                                </div>
                                <div className="panel-footer">
                                    <div className="btn-group" role="group" aria-label="XWord Controls">
                                        <button type="button" className="btn btn-default" onClick={this.getLastWord}>Last Word</button>
                                        <button type="button" className="btn btn-default" onClick={this.getNextWord}>Next Word</button>
                                        <button type="button" className="btn btn-default" onClick={this.markWord}>Add to Review List</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h3>Review List</h3>
                            {(hasItems) ? (<div className="clearList"><a onClick={this.clearList}>clear list</a></div>) : ""}
                            {(hasItems) ? marked.map(function (value, index) {
                                return (
                                    <div key={index} className="markedWord">
                                        <span className="removeItem glyphicon glyphicon-remove" aria-hidden="true" onClick={me.removeItem.bind(me, value.word)} />
                                        <b>{value.word}</b> -- {value.definition}
                                    </div>);
                            }) : (<div className="markedWord">currently empty</div>)}
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