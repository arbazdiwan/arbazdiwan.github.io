import React from "react";

const AboutSection = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Results-oriented software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://arbazdiwan.github.io/Arbaz-Diwan-Resume.pdf" target="_blank">
                        <i className="fas fa-file me-2"></i>
                        View Resume
                    </a>
                </div>
            </div>
        </section>);
};

export default AboutSection;
