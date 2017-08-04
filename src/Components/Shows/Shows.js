import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ShowItem from './ShowItem'

import { fetchShows, fetchPastShows } from '../../actions'

class Shows extends Component {

    constructor(props) {
        super(props);
        this.getPastShows = this.handlePastClick.bind(this)
        this.getFutureShows = this.handleFutureClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.data.shows !== nextProps.data.shows)
    }

    componentDidMount() {
        this.handleFutureClick()
    }

    handlePastClick(e) {
        if (e) e.preventDefault()
        this.props.fetchPastShows()
    }

    handleFutureClick(e) {
        if (e) e.preventDefault()
        this.props.fetchShows()
    }

    render() {
        const { shows } = this.props.data
        var me = this
        return (
            <section className="" id="shows">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Where I'm Playing</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="show-toggle">
                                <a href="" onClick={this.getFutureShows}>Upcoming Shows</a> | <a href="" onClick={this.getPastShows}>Past Shows</a>
                            </div>
                            {(shows && shows.length !== 0) ? shows.map(function (value, index) {
                                return (<ShowItem show={value} key={index} {...me.props} />);
                            }) : (<div className="loader"/>)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Shows.propTypes = {
    data: PropTypes.object,
    dispatcher: PropTypes.func
}


function select(state) {
    return {
        data: state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { fetchShows, fetchPastShows }
)(Shows)