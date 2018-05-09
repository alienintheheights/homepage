import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ShowItem from './ShowItem'

import { fetchShows, fetchPastShows } from '../../actions'

class Shows extends Component {

    constructor(props) {
        super(props)
        this.state = { activeLink: 'future' }
        this.getPastShows = this.handlePastClick.bind(this)
        this.getFutureShows = this.handleFutureClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.data.shows !== nextProps.data.shows)
    }

    componentDidMount() {
        if (!this.props.data || this.props.data.shows.length === 0) {
            this.handleFutureClick()
        }
    }

    handlePastClick(e) {
        if (e) e.preventDefault()
        this.props.fetchPastShows()
        this.setState({ activeLink: 'past' })
    }

    handleFutureClick(e) {
        if (e) e.preventDefault()
        this.props.fetchShows()
        this.setState({ activeLink: 'future' })
    }

    getLinkClass(name) {
        return (name === this.state.activeLink) ? 'show-active-link' : ''
    }

    render() {
        const { shows, showsFetched } = this.props.data
        var me = this
        return (
            <section className='' id='shows'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h2>Shows</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3'>
                            <div className='show-toggle'>
                                <a id='future-show-link' className={me.getLinkClass('future')} href='' onClick={this.getFutureShows}><span className='glyphicon glyphicon-arrow-up' aria-hidden='true' /> Upcoming Shows</a>
                                <span className='glyphicon glyphicon-option-vertical' aria-hidden='true' />
                                <a id='past-show-link' className={me.getLinkClass('past')} href='' onClick={this.getPastShows}>Past Shows <span className='glyphicon glyphicon-arrow-down' aria-hidden='true' /></a>
                            </div>
                            <div className='show-items'>
                                {(showsFetched) ?
                                    ((shows && shows.length !== 0) ? shows.map((value, index) => {
                                        return (<ShowItem show={value} key={index} {...me.props} />)
                                    })
                                        : (<div className='show-nonelisted'>No shows scheduled at this time</div>)
                                    ) : (<div className='loader' />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Shows.propTypes = {
    data       : PropTypes.object,
    dispatcher : PropTypes.func
}


function select(state) {
    return {
        data : state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { fetchShows, fetchPastShows }
)(Shows)
