import React from 'react'

const StartHiring = () => {
    return (
        <div className="start_hiring cmn_gap">
            <div className="container">
                <div className="sec_hd" data-aos="fade-down">
                    <h2>How To Start Hiring:</h2>
                    <p>Our team will take you through an efficient hiring process that matches you with the professionals
                        who are an exact fit for your business needs.</p>
                </div>
                <div className="start_hiring_wrap">
                    <div className="main-row start_hiring_row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                        data-aos-delay="200" data-aos-offset="0">
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_icon">
                                <figure><img src="./images/hiring1.svg" alt="hiring1" /></figure>
                            </div>
                        </div>
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_cont">
                                <span className="hiring_num">1</span>
                                <h3>Book a discovery call</h3>
                                <p>First, let’s chat about your business and get a deep understanding of your objectives.
                                </p>
                                <div className="hiring_btn">
                                    <a href="#form_sec" data-scroll>Book a call today
                                        <span><img src="./images/hiring_btnarw.svg" alt="hiring_btnarw" /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-row start_hiring_row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                        data-aos-delay="400" data-aos-offset="0">
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_icon">
                                <figure><img src="./images/hiring2.svg" alt="hiring1" /></figure>
                            </div>
                        </div>
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_cont">
                                <span className="hiring_num">2</span>
                                <h3>Find candidates</h3>
                                <p>Utilize our connections with prominent universities and expat networks to find the best candidates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="main-row start_hiring_row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                        data-aos-delay="600" data-aos-offset="0">
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_icon">
                                <figure><img src="./images/hiring3.svg" alt="hiring1" /></figure>
                            </div>
                        </div>
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_cont">
                                <span className="hiring_num">3</span>
                                <h3>Choose your staff</h3>
                                <p>Screen and interview if you wish, or leave it to us to pick the 
                                    best staff for the role.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="main-row start_hiring_row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                        data-aos-delay="800" data-aos-offset="0">
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_icon">
                                <figure><img src="./images/hiring4.svg" alt="hiring1" /></figure>
                            </div>
                        </div>
                        <div className="main-col start_hiring_col">
                            <div className="start_hiring_cont">
                                <span className="hiring_num">4</span>
                                <h3>Build your team</h3>
                                <p>We stick by you long-term to make sure your staff successfully integrate into your team, and manage all aspects of their employment from our end.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartHiring