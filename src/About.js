import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-2">
                            <p>Hi, I'm a software developer. I write Java backends, JS front-ends. 
                             Lately, I've been doing a lot of ReactJS. I'm also a musician. I play
                             the piano, jazz primarily but sometimes I play R&B and sometimes I 
                             record ambient loops.</p>
                        </div>
                        <div className="col-lg-4">
                            <p>This site is mostly a glorified business card. Use it to get my digits 
                                or send me a message.
                                The fastest way to do that is by email: andrew.lienhard @ gmail.com, 
                                or just find me on <a href="https://www.linkedin.com/in/andrewlienhard/" className="">LinkedIn</a>.
                               </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default About;