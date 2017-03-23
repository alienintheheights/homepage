import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowListing from './ShowListing'

class Shows extends Component {
    // TODO make this load via REST API
    componentDidMount() {
        this.props.dispatch({ type: 'SHOW_FETCH_REQUESTED', payload: {} })
    }

    render() {
        const { shows } = this.props.data
        const showsarray = (shows) ? shows.shows : null
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
                            {(showsarray) ? showsarray.map(function (value, index) {
                                return (<ShowListing show={value} key={index} {...me.props} />);
                            }) : ""}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Shows.propTypes = {
    data: React.PropTypes.object,
    dispatcher: React.PropTypes.func
}


function select(state) {
    return {
        data: state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, {}
)(Shows)