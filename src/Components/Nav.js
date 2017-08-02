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
            var $anchor = $(this);
            var href = $anchor.attr('href');
            if (!href) return;
            var idx = href.indexOf("#");
            var isHash = (idx == 0);
            var offset = isHash ? $($(href)).offset() : null;
            if (offset) {
                $('html, body').stop().animate({
                 scrollTop: (offset) ? (offset.top - 50) : 0
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            } else {
                window.location="/" + href;
            }
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
                        <Link className="navbar-brand" to='#page-top'>Home</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="page-scroll">
                                <a href="#shows">Shows</a>
                            </li>
                            <li className="page-scroll">
                                <a href="#portfolio">Photos</a>
                            </li>
                            <li className="page-scroll">
                                <a href="#word">XWord</a>
                            </li>
                            <li className="page-scroll">
                                <a href="#about">About</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Nav;