import React, { Component } from 'react'
import { shuffle } from '../../util'

class WordItem extends Component {
    constructor(props) {
        super(props)
        this.showHint = this.showHint.bind(this)
        this.revealWord = this.revealWord.bind(this)
        this.state = {
            currentLetterCount: 0,
            revealOrder: [],
            reveal: false
        }
    }

    componentWillReceiveProps() {
        this.setState({
            currentLetterCount: 0,
            revealOrder: [],
            reveal: false
        })
    }

    showHint(e) {
        if (e) e.preventDefault()
        const { word } = this.props
        const { revealOrder, currentLetterCount } = this.state
        this.setState({
            currentLetterCount: (currentLetterCount < word.entry.length) ? currentLetterCount + 1 : currentLetterCount,
            revealOrder: (revealOrder.length === 0) ? this.initRandState() : revealOrder
        })
    }

    revealWord(e) {
        if (e) e.preventDefault()
        this.setState({
            reveal: true
        })
    }

    initRandState() {
        const { word } = this.props

        let ranarray = []
        for (var i = 0; i < word.entry.length; i++) {
            ranarray[i] = i
        }
        shuffle(ranarray)
        return ranarray
    }

    revealNextLetter() {
        const { word } = this.props
        const { revealOrder, currentLetterCount, reveal } = this.state

        if (!word) return ""
        if (reveal) return word.entry

        let cluearry = []
        let wordArray = word.entry.split("")
        for (var j = 0; j < currentLetterCount; j++) {
            cluearry[revealOrder[j]] = wordArray[revealOrder[j]].toUpperCase()
        }
        for (var i = 0; i < wordArray.length; i++) {
            cluearry[i] = cluearry[i] || "_"
        }
        return cluearry.join("")
    }

    render() {
        const { word } = this.props
        const { currentLetterCount, reveal } = this.state

        const clue = this.revealNextLetter()
        const hintBtnClass = (!reveal && word && currentLetterCount < word.entry.length) ? "btn btn-default btn-sm" : "btn btn-default btn-sm disabled"

        return (
            <div className="word-listing">
                <div className="word-def">
                    <h4>{word.definition}</h4>
                </div>
                <div className="word-answer">
                    <span className="word-reveal">{clue}</span>
                    <button className={hintBtnClass} onClick={this.showHint}>hint</button>
                    <button className={hintBtnClass} onClick={this.revealWord}>reveal</button>

                </div>
            </div>
        )
    }
}

export default WordItem