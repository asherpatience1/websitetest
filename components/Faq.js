import React from 'react'

const Faq = () => {
    return (
        <div className="faq cmn_gap" style={{ background: "url(images/faq_back.png)" }}>
            <div className="container">
                <div className="sec_hd" data-aos="fade-down">
                    <h2>FAQ</h2>
                </div>
                <div className="faq_main">
                    <div className="faq_main_wrap active">
                        <h6>Who is Diovec?</h6>
                        <div className="faq_answer">
                            <p>Founded in Melbourne in 2018, Diovec helps Australian companies build
                                full-time teams with offshore staff in Thailand. This gives companies access to talented
                                technical resources for up to 50% less cost when compared to local hiring.</p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>Why choose offshore staffing?</h6>
                        <div className="faq_answer">
                            <p>Offshoring staff to Thailand can be a cost-effective solution for businesses looking to reduce staffing expenses. With a highly skilled and low-cost workforce, Thailand offers significant cost savings compared to hiring in-house staff or outsourcing to other countries, whilst maintaining high working standards. </p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>What industries do you recruit for?</h6>
                        <div className="faq_answer">
                            <p>While in theory we can find staff with almost any specialised qualifications and skillsets, we have most extensive experience with:<br></br><br></br>
                            * Software Development (Web, App, Desktop)<br></br>
                            * Graphic Design<br></br>
                            * 3D Modelling<br></br>
                            * Engineering (Civil, Structural, Survey)<br></br>
                            * Tech Support<br></br>
                            * Customer Service<br></br>
                            * Digital Marketing<br></br>
                            </p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>How many resources can I hire?</h6>
                        <div className="faq_answer">
                            <p>There is no limit.  We have the office space and business infrastructure to support large teams.  <br></br><br></br> No matter the number of staff, everything is easily rolled into a single monthly invoice, making it simple to scale up as your business grows.</p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>Where is my team located?</h6>
                        <div className="faq_answer">
                            <p>We operate out of Chiang Mai in northern Thailand.<br></br><br></br>All staff are supplied with the requisite hardware and space at our modern offices, situated just across from the well-regarded Chiang Mai University.</p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>Are staff proficient in English?</h6>
                        <div className="faq_answer">
                            <p>Yes, whether hiring Thai locals or foreign expats, we can find staff with all levels of English competency.<br></br><br></br>Different roles call for different levels, but we focus on finding candidates with business-level English as a minimum.</p>
                        </div>
                    </div>
                    <div className="faq_main_wrap">
                        <h6>How much does it cost?</h6>
                        <div className="faq_answer">
                            <p>Diovec gives companies access to talented
                                technical resources for up to 50% less cost when compared to local hiring.<br></br><br></br>This figure is based on overall cost savings, not just raw salary. The savings made on superannuation, payroll tax, workplace insurance, HR, admin and other office overheads factor heavily into this figure.</p>
                        </div>
                    </div>
                </div>
                <div className="faq_hire">
                    <a href="#form_sec" className="cmn_btn" data-scroll>HIRE TODAY</a>
                </div>
            </div>
        </div>
    )
}

export default Faq