import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.handleScrollAnimation()
    }
    componentDidUpdate() {
        this.handleScrollAnimation()
    }

    handleScrollAnimation() {
        // Co-opted from the Freelance theme.

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        // handles both hash and page links
        $('.page-scroll a').bind('click', function (event) {
            // scenario one: the anchor exists in the page
             $('html, body').stop().animate({
                 scrollTop: 0
                }, 1250, 'easeInOutExpo');
               // event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })

    }

    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to='/'>Home</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="/"></a>
                            </li>
                            <li className="page-scroll">
                                <a href="/#shows">Shows</a>
                            </li>
                            <li className="page-scroll">
                                <a href="/#photos">Photos</a>
                            </li>
                            <li className="page-scroll">
                                <a href="/#xword">XWord</a>
                            </li>
                            <li className="page-scroll">
                                <a href="/#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Nav;