import React, { Component } from 'react';

class About extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    
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
                                <img className="img-responsive mini-circular--portrait" src="img/biopic.jpg" alt="" />
                             Andrew plays the piano, jazz primarily but not exclusively, and usually does so publicly once or twice
                              a week (see the <a className="successLink" href="#shows">shows</a> section above to find out where). 
                              He is also a software developer, as evidenced by the fact that this benign website
                              now has unit tests and build scripts (the <a className="successLink" 
                                    onClick={this.handleClick.bind(this, 'https://github.com/alienintheheights/homepage')}  
                                    href="https://github.com/alienintheheights/homepage">code</a>, if 
                              you really care). More a matter of pride than practicality, really. 
                              </p>
                        </div>
                        <div className="col-lg-4">
                            <p>
                                Since <del>I'm</del> Andrew is not on Facebook, the easiest way to reach <del>me</del> him is by 
                                email: andrew.lienhard @ gmail.com or just find him 
                                on <a 
                                    onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/andrewlienhard/')} 
                                    className="successLink"
                                    href="https://www.linkedin.com/in/andrewlienhard/" >LinkedIn</a> or <a 
                                        onClick={this.handleClick.bind(this, 'https://twitter.com/aendroulius')} 
                                        className="successLink"
                                        href="https://twitter.com/aendroulius">Twitter</a>. Meanwhile,
                                check out his wife Stephanie's <a 
                                                                className="successLink" 
                                                                onClick={this.handleClick.bind(this, 'http://www.sparrowandthenest.com/')}
                                                                href="http://www.sparrowandthenest.com/">site</a>: she makes
                                the most amazing <a className="successLink"
                                                onClick={this.handleClick.bind(this, 'http://www.sparrowandthenest.com/#/photos/')}
                                                href="http://www.sparrowandthenest.com/#/photos/">soap!</a> End of bio. 
                                Have a nice day.
                               </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;