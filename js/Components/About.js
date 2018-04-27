import React, { Component } from 'react';
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


                        <ul className="col-sm-6 col-sm-offset-3 list-inline">
                            <li>
                                andrew.lienhard@gmail.com
                                </li>
                            <li>
                                <a href="https://twitter.com/aendroulius" onClick={this.handleClick.bind(this, 'https://twitter.com/aendroulius')} className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/andrewlienhard/" onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/andrewlienhard/')} className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://www.flickr.com/photos/lienhard/" onClick={this.handleClick.bind(this, 'https://www.flickr.com/photos/lienhard')} className="btn-social btn-outline"><span className="sr-only">Flickr</span><i className="fa fa-fw fa-flickr"></i></a>
                            </li>
                            <li>
                                <a href="https://soundcloud.com/andrewishere" onClick={this.handleClick.bind(this, 'https://soundcloud.com/andrewishere')} className="btn-social btn-outline"><span className="sr-only">Soundcloud</span><i className="fa fa-fw fa-soundcloud"></i></a>
                            </li>
                            <li>
                                <a href="http://fauxmat.wordpress.com" onClick={this.handleClick.bind(this, 'http://fauxmat.wordpress.com')} className="btn-social btn-outline"><span className="sr-only">Wordpress</span><i className="fa fa-fw fa-wordpress"></i></a>
                            </li>
                        </ul>

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
