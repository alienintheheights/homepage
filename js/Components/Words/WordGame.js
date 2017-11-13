import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as c from '../../constants'

import { fetchWords } from '../../actions'
import WordItem from './WordItem'

class WordGame extends Component {
    constructor(props) {
        super(props);
        this.getNextWord = this.getNextWord.bind(this)
        this.getLastWord = this.getLastWord.bind(this)
        this.clearList = this.clearList.bind(this)
        this.filterType = this.filterType.bind(this)
        this.state = {
            marked: JSON.parse(localStorage.getItem('markedWords')) || [],
            wordList: [],
            wordIndex: 0,
            wordType: 0
        }
    }

    componentDidMount() {
        // TODO maybe not every time...
        this.props.fetchWords()
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            wordList: nextProps.data.words
        })
    }
    

    udpateList(item) {
        localStorage.setItem('markedWords', JSON.stringify(item));
        this.setState({
            marked: item || []
        })
    }

    hasWord(word) {
        const { marked, wordIndex, wordList } = this.state
        const wod = wordList[wordIndex]
        let idx = marked.findIndex(curwod => curwod.word === wod.word)
        return (idx === -1) ? false : true
    }

    clearList(e) {
        if (e) e.preventDefault()
        this.udpateList(null)
    }

    removeItem(selectedWord) {
        const { marked, wordIndex, wordList } = this.state
        let newMark = marked.filter(function (candidate) {
            return candidate.word !== selectedWord;
        });
        this.udpateList(newMark)
    }

    markWord(e) {
        if (e) e.preventDefault()
        const { wordIndex, wordList } = this.state
        const wod = wordList[wordIndex]
        if (!this.hasWord(wod)) {
            let newMark = Object.assign([], this.state.marked) // copy
            newMark.unshift(wod)
            this.udpateList(newMark)
        }
    }

    getNextWord(e) {
        if (e) e.preventDefault()
        const { wordIndex, wordList } = this.state
        const nextIndex = (wordIndex < wordList.length - 1) ? wordIndex + 1 : 0
        this.setState({
            wordIndex: nextIndex
        })
        return this.state.wordList[nextIndex]
    }

    getLastWord(e) {
        if (e) e.preventDefault()
        const { wordIndex, wordList } = this.state
        const lastIndex = (wordIndex > 0 ) ? (wordIndex - 1) : (wordList.length - 1)
        this.setState({
            wordIndex: lastIndex
        })
        return this.state.wordList[lastIndex]
    }

    filterType(typeId) {
        const { words } = this.props.data
        const filterList = (typeId === -1) ? words : words.filter((val, inx) => {
            if (typeId === 0 || (val.type * 1 === typeId)) {
                return val
            }
        })
        this.setState({
            wordList: filterList,
            wordIndex: 0,
            wordType: typeId
        })
    }

    render() {
        const { marked, wordList, wordIndex } = this.state
        const wod = wordList[wordIndex]
        const hasItems = (marked.length !== 0)
        const markHandler = this.markWord.bind(this)
        var me = this
        return (
            <section className="" id="word">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Crossword Vocab</h2> <small>I made a little game out of my growing collection of crossword words.
                                Click the hint link to reveal letters.</small>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 text-center">
                            <div className="panel panel-default">
                                <div className="panel-body game-panel">
                                    {(wod && wod.definition) ? (<WordItem isMarked={me.hasWord(wod.word)} markHandler={markHandler} selectedWord={wod} {...me.props} />) : (<div className="loader" />)}
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
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel-footer">
                                    <div className="btn-group" role="group" aria-label="XWord Categories">
                                        <h4>Filter Words By Category</h4>
                            {
                                c.WORD_TYPES.map(function (val, inx) {
                                    const className = (inx === me.state.wordType) ? "btn btn-success" : "btn btn-default"
                                    const note = (inx === me.state.wordType) ? (<span className="word-total">({me.state.wordList.length} words)</span>) : ''
                                    return (
                                        <span key={`word-type-${inx}`} >
                                            <button className={className} onClick={() => me.filterType(inx)}>
                                            {val}
                                            {note}
                                            </button>
                                        </span>
                                    )
                                })}
                                 </div>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <ul className="review-listing">
                                {(hasItems) ? (
                                    <li className="review-listing">
                                        <div className="clearList">
                                           Your saved words. <a onClick={this.clearList}>clear list</a>
                                        </div>
                                    </li>
                                ) : ""
                                }
                                {(hasItems) ? marked.map(function (value, index) {
                                    return (
                                        <li key={`saved-words-parent-${index}`} className="review-listing">
                                            <div key={`saved-words-${index}`} className="markedWord">
                                                <span className="removeItem glyphicon glyphicon-remove" aria-hidden="true" onClick={me.removeItem.bind(me, value.word)} />
                                                <b>{value.word}</b> -- {value.definition}
                                            </div>
                                        </li>);
                                }
                                ) : ""}
                            </ul>
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
    select, { fetchWords}
)(WordGame)