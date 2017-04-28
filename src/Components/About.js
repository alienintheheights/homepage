import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchProfile } from '../actions'

class About extends Component {

    componentDidMount() {
        this.props.fetchProfile()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleClick(linkText) {
        window.trackOutboundLink(linkText);
    }

    render() {
        const { profile } = this.props.data 
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div dangerouslySetInnerHTML={profile} />
                    </div>
                </div>
            </section>
        );
    }
}


About.propTypes = {
    data: PropTypes.object
}


function select(state) {
    return {
        data: state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { fetchProfile }
)(About)