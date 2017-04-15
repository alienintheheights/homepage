import React, { Component } from 'react';

class About extends Component {

    handleClick(linkText) {
        window.trackOutboundLink(linkText);
    }

    render() {
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
                        <div className="col-lg-4 col-lg-offset-2">
                            <p>
                             Hi, I'm a software developer. I write Java backends, JS front-ends. 
                             Lately, I've been doing a lot of ReactJS. I'm also a musician. I play
                             the piano, jazz primarily but not exclusively. Check out the <a href="#shows">Shows</a> section above to find out where.</p>
                        </div>
                        <div className="col-lg-4">
                            <p>This site serves as a glorified business card. Use it to get my digits or send me a message.
                                The fastest way to do that is by email: andrew.lienhard @ gmail.com 
                                or just find me on <a onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/andrewlienhard/')} className="successLink" href="https://www.linkedin.com/in/andrewlienhard/" >LinkedIn</a>.
                                I'm not on Facebook. Meanwhile, check out my wife's site: <a className="successLink" onClick={this.handleClick.bind(this, 'http://www.sparrowandthenest.com/')} href="http://www.sparrowandthenest.com/">sparrowandthenest.com</a>
                               </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;