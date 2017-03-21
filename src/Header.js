import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="container" id="maincontent" tabIndex="-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive circular--portrait" src="img/portfolio/synthlab.jpg" alt=""/>
                            <div className="intro-text">
                                <h1 className="name">Andrew Lienhard</h1>
                                <hr className="star-light" />
                                <span className="skills">Software Developer - Pianist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;