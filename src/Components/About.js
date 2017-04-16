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
                                <img className="img-responsive mini-circular--portrait" src="img/biopic.jpg" alt=""/>
                             Hi, thanks for visiting. As both a musician and a software developer, I split my time
                             between two very different worlds. As a developer, I work for a large software company writing Java backends and 
                             JS front-ends--lately, I've been doing a lot of ReactJS. I also play
                             the piano, jazz primarily but not exclusively, and usually do so publicly a couple times each week.
                             Check out the <a className="successLink" href="#shows">shows</a> section above to find out where.</p>
                        </div>
                        <div className="col-lg-4">
                            <p>Since I'm not on Facebook, the easiest way to reach me is by email: andrew.lienhard @ gmail.com 
                                or just find me on <a onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/andrewlienhard/')} className="successLink" 
                                href="https://www.linkedin.com/in/andrewlienhard/" >LinkedIn</a> or
                                on <a onClick={this.handleClick.bind(this, 'https://twitter.com/aendroulius')} className="successLink" 
                                href="https://twitter.com/aendroulius">Twitter</a>. Meanwhile, 
                                check out my wife's <a className="successLink" onClick={this.handleClick.bind(this, 'http://www.sparrowandthenest.com/')} 
                                href="http://www.sparrowandthenest.com/">site</a>. She makes
                                the most amazing <a className="successLink" 
                                onClick={this.handleClick.bind(this, 'http://www.sparrowandthenest.com/#/photos/')} 
                                href="http://www.sparrowandthenest.com/#/photos/">soap</a>. End of bio. Have a nice day.
                                
                               </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;