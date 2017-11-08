import React, { Component } from 'react'
import { shuffle } from '../../util'
import * as c from '../../constants'

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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedWord !== nextProps.selectedWord) {
            return true;
        }
        if ((nextState.currentLetterCount > 0 && this.state.currentLetterCount !== nextState.currentLetterCount) || nextState.reveal) {
            return true;
        }
        return false;
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
        const { selectedWord } = this.props
        const { revealOrder, currentLetterCount } = this.state
        this.setState({
            currentLetterCount: (currentLetterCount < selectedWord.word.length) ? currentLetterCount + 1 : currentLetterCount,
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
        const { selectedWord } = this.props

        let ranarray = []
        for (var i = 0; i < selectedWord.word.length; i++) {
            ranarray[i] = i
        }
        shuffle(ranarray)
        return ranarray
    }

    revealNextLetter() {
        const { selectedWord } = this.props
        const { revealOrder, currentLetterCount, reveal } = this.state

        if (!selectedWord) return ""
        if (reveal) return selectedWord.word

        let cluearry = []
        let wordArray = selectedWord.word.split("")
        for (var j = 0; j < currentLetterCount; j++) {
            cluearry[revealOrder[j]] = wordArray[revealOrder[j]].toUpperCase()
        }
        for (var i = 0; i < wordArray.length; i++) {
            cluearry[i] = cluearry[i] || "_"
        }
        return cluearry.join("")
    }

    render() {
        const { selectedWord, isMarked } = this.props
        const { currentLetterCount, reveal } = this.state
        const defClass = (isMarked) ? "learnWord" : ""
        const clue = this.revealNextLetter()
        const hintBtnClass = (!reveal && selectedWord && currentLetterCount < selectedWord.word.length) ? "btn btn-default btn-sm" : "btn btn-default btn-sm disabled"

        return (
            <div className="word-listing">
                <button className={hintBtnClass} onClick={this.showHint}>hint <span className="glyphicon glyphicon-question-sign"/></button>
                <button className={hintBtnClass} onClick={this.revealWord}>reveal <span className="glyphicon glyphicon-eye-open"/></button>
                <button className="btn btn-default btn-sm" onClick={this.props.markHandler}>save <span className="glyphicon glyphicon-floppy-disk"/></button>
                <div className="word-answer">
                    <span className="word-reveal">{clue}</span>
                </div>
                <div className="word-def">
                    <h4>
                        {(isMarked)? (<span className={"glyphicon glyphicon-star " + defClass}/>) : ""}
                        {selectedWord.definition}
                    </h4>
                </div>
                
            </div>
        )
    }
}

export default WordItem