import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchProfile } from '../actions'

class About extends Component {

    componentDidMount() {
        if (!this.props.data || !this.props.data.profile) {
            this.props.fetchProfile()
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    handleClick(linkText) {
        window.trackOutboundLink(linkText)
    }

    render() {
        const { profile } = this.props.data
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="bio">
                                Andrew Lienhard is a pianist and software developer. He lives with his wife <a href="http://sparrowandthenest.com">Stephanie</a> in Houston, Texas.<br /><br />
                            </div>
                            <img src="/andrew/atcezanne.jpg" className="responsive mini-circular--portrait " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <h2>Contact</h2>
                        </div>


                        <ul className="col-sm-6 col-sm-offset-3 ">

                            <li>
                                <a href="https://www.linkedin.com/in/andrewlienhard/" onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/andrewlienhard/')} className="btn-social btn-outline">https://www.linkedin.com/in/andrewlienhard</a>
                            </li>
                            <li>
                                andrew.lienhard@gmail.com
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        )
    }
}


About.propTypes = {
    data : PropTypes.object
}


function select(state) {
    return {
        data : state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { fetchProfile }
)(About)
