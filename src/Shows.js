import React, { Component } from 'react';

class Shows extends Component {

    render() {
        return (
            <section className="" id="shows">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Where I'm Playing</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="show-listing">
                            <b>Dean Moore Quartet</b><br/>
                            <a href="https://www.facebook.com/cezannejazz/">Cezanne</a><br/>
                            <small>9pm, Saturday, March 18th, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>Solo Piano</b><br/>
                            <a href="http://www.granducahouston.com/">Hotel Granduca</a><br/>
                            <small>5-8pm, Friday, March 24th, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>Kim Prevost and Bill Solley: Live Recording</b><br/>
                            <a href="https://www.kimandbill.com/">Lucky Run Studio</a><br/>
                            <small>7pm, Saturday, March 25th, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>David Craig Quartet</b><br/>
                             <a href="https://www.facebook.com/cezannejazz/">Cezanne</a><br/>
                            <small>9pm, Friday, April 7th, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>Jazz & Poetry: Kid's Poetry Night (duo with Thomas Helton)</b><br/>
                             <a href="http://www.brazosbookstore.com/">Brazos Bookstore</a><br/>
                            <small>6-8pm, Sunday, April 2nd, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>Passover services at SHMA KOLEINU</b><br/>
                             <a href="http://www.shmakoleinu.com/">SHMA KOLEINU</a><br/>
                            <small>6pm, Monday, April 10th, 2017</small><br/>
                            </div>
                             <div className="show-listing">
                            <b>Watercolors</b><br/>
                            <a href="http://www.houston.sambucarestaurant.com/home">Sambuca</a><br/>
                            7-11pm, Tuesday, April 11th, 2017<br/>
                            </div>
                             <div className="show-listing">
                             <b>Shabbat services at SHMA KOLEINU</b><br/>
                             <a href="http://www.shmakoleinu.com/">SHMA KOLEINU</a><br/>
                            6pm, Monday, May 5th, 2017<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}


export default Shows;