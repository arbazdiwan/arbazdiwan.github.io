import React from "react";
import DividerCustom from "./DividerCustom";

const HeaderSection = () => {
    return (
        <header className="masthead bg-primary text-white text-center" id="page-top">
            <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                {/* <img className="masthead-avatar mb-5 avatar" src="assets/img/avatar.jpg" alt="..." /> */}

                <h1 className="masthead-heading text-uppercase mb-0">Arbaz Diwan</h1>

                {/* <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div> */}
                <DividerCustom />


                <p className="masthead-subheading font-weight-light mb-0">Software Engineer</p>
            </div>
        </header>
    );
};

export default HeaderSection;
