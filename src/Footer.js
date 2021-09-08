import React from "react";

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            India
                            {/* 2215 John Daniel Drive */}
                            <br />
                            {/* Clark, MO 65243 */}
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/arbaz-diwan/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/arbazdiwan" target="_blank"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/ab.diwan/" target="_blank"><i className="fab fa-fw fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/arbazdiwan1" target="_blank"><i className="fab fa-fw fa-twitter"></i></a>
                        
                        {/* <a className="btn btn-outline-light btn-social mx-1" href="https://arbazdiwan.github.io/" target="_blank"><i className="fab fa-fw fa-dribble"></i></a> */}
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Theme</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed, HTML Bootstrap theme created by &nbsp;
                            <a href="http://startbootstrap.com" target="_blank">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
