import React, { Component } from 'react'

class Header extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        // 
        return false
    }
    
    render() {
        return (
            <header>
                <div className="container" id="maincontent" tabIndex="-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intro-text">
                                <img className="img-responsive circular--portrait" src="img/synthlab.jpg" alt="" />
                                <h2 className="name">Andrew Lienhard</h2>
                                <hr className="star-light" />
                                <span className="skills">Musician, Software Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header