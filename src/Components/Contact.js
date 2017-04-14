import React, { Component } from 'react';

// TODO not used
class Contact extends Component {

    render() {
        return (
            <section className="success"  id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Contact Me</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            The fastest way to reach me is by email at andrew.lienhard @ gmail.com, or just find me on <a href="https://www.linkedin.com/in/andrewlienhard/" className="">LinkedIn</a>.
                         </div>
                    </div>
                </div>
            </section>

        );
    }
}


export default Contact;