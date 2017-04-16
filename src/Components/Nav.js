import React, { Component } from 'react';

// TODO find out why "easing" isn't working here
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
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
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

        // Floating label headings for the contact form
        $(function () {
            $("body").on("input propertychange", ".floating-label-form-group", function (e) {
                $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
            }).on("focus", ".floating-label-form-group", function () {
                $(this).addClass("floating-label-form-group-with-focus");
            }).on("blur", ".floating-label-form-group", function () {
                $(this).removeClass("floating-label-form-group-with-focus");
            });
        });
    }

    render() {
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#page-top">Home</a>
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