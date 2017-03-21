import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3>Location</h3>
                                <br />Houston/Austin and thereabouts
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>Around the Web</h3>
                                <ul className="list-inline">
                                    <li>
                                        <a href="https://twitter.com/aendroulius" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/andrewlienhard/" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.flickr.com/photos/lienhard/" className="btn-social btn-outline"><span className="sr-only">Flickr</span><i className="fa fa-fw fa-flickr"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://soundcloud.com/andrewishere" className="btn-social btn-outline"><span className="sr-only">Soundcloud</span><i className="fa fa-fw fa-soundcloud"></i></a>
                                    </li>
                                    <li>
                                        <a href="http://fauxmat.wordpress.com" className="btn-social btn-outline"><span className="sr-only">Wordpress</span><i className="fa fa-fw fa-wordpress"></i></a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>Tech Bits</h3>
                                <p>This site is based on the <a href="http://startbootstrap.com">Freelance</a> Bootstrap theme. I ported it to ReactJS.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                Copyright &copy; Andrew Lienhard 2017
                    </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;