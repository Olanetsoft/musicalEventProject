import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {

    state = {


    }


    render() {
        return (
            <Slide right delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts In
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                DAYS
                        </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                2
                        </div>
                            <div className="countdown_tag">
                                Hrs
                        </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                20
                        </div>
                            <div className="countdown_tag">
                                Min
                        </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                40
                        </div>
                            <div className="countdown_tag">
                                Sec
                        </div>
                        </div>
                    </div>
                </div>
            </Slide>

        );
    }
}

export default TimeUntil;