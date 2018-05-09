import React, { Component } from 'react'

class Writing extends Component {

    handleClick(linkText) {
        window.trackOutboundLink(linkText)
    }

    render() {
        
        return (
            <section className="success" id="writing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Writing</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-lg-12 text-left">
                         <p>Beyond music and code, I enjoy writing. Here are a few links:</p>

                           <p>An occasionally maintained <a onClick={this.handleClick.bind(this, 'http://fauxmat.wordpress.com')} className="btn-social btn-outline" href="http://fauxmat.wordpress.com">Blog</a></p>
                           <p>
                           A collection of short stories <a onClick={this.handleClick.bind(this, 'http://shelfify.com/edition/')} className="btn-social btn-outline" href="http://shelfify.com/edition/">here</a></p>
                           <p>
                          Once upon a time I wrote CD reviews for <a onClick={this.handleClick.bind(this, 'https://www.allaboutjazz.com/php/contributor_articles.php?id=44131')}  className="btn-social btn-outline" href="https://www.allaboutjazz.com/php/contributor_articles.php?id=44131">AllAboutJazz.com</a></p>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default Writing
