import React, { Component } from 'react';

class Footer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handleClick(linkText) {
        window.trackOutboundLink(linkText);
    }

    render() {
        return (
            <footer className="col-lg-12 text-center pad-the-top pad-the-bottom">
                <hr />
                react :: redux :: php ::
                website source <a href="https://github.com/alienintheheights/homepage" onClick={this.handleClick.bind(this, 'https://github.com/alienintheheights/homepages')} className="btn-social btn-outline"><span className="sr-only">GitHub</span><i className="fa fa-fw fa-github"></i></a>
            </footer>
        );
    }
}


export default Footer;
