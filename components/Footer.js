import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-sec">
            <div className="container">
                <div className="footer-wrap">
                    <div className="footer-logo">
                        <a href="index.html"><img src="./images/footer-logo.png" alt="" /></a>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <li>Melbourne, Australia & Chiang Mai, Thailand</li>
                            <li>Email us:<a href="mailto:info@companyname.com"> contact@diovec.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#url"><img src="./images/fb-icon.svg" alt="" /></a></li>
                            <li><a href="#url"><img src="./images/twitter-icon.svg" alt="" /></a></li>
                            <li><a href="#url"><img src="./images/youtube-icon.svg" alt="" /></a></li>
                            <li><a href="#url"><img src="./images/insta-icon.svg" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="footer-btm">
                        <p>Copyright © 2023 Diovec. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer