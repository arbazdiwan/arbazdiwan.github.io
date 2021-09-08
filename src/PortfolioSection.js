import react from "react";
import DividerCustom from "./DividerCustom";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                {/* <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div> */}
                <DividerCustom />
                {/* <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." /> */}

                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <PortfolioItem
                        imageURL="assets/img/avataaars.svg"
                        modalTarget="#portfolioModal1"
                        title="Personal Website"
                        color="#eab676"
                    />
                    {/* <!-- Portfolio Item 2--> */}
                    <PortfolioItem
                        imageURL="assets/img/portfolio/covid19_tracker.png"
                        modalTarget="#portfolioModal2"
                        title="Covid-19 Tracker"
                        color="#d7efef"
                    />                   
                    {/* <!-- Portfolio Item 3--> */}
                    <PortfolioItem
                        imageURL="assets/img/portfolio/applogo.png"
                        modalTarget="#portfolioModal3"
                        title="Crime Reporting App"
                        color="#2B2929"
                    />
                    {/* <!-- Portfolio Item 4--> */}
                    <PortfolioItem
                        imageURL="assets/img/portfolio/SPULOGOCompressed.jpg"
                        modalTarget="#portfolioModal4"
                        title="Job Application System"
                        color="#1874a5"
                    />
                    {/* <!-- Portfolio Item 5--> */}
                    {/* <PortfolioItem
                        imageURL="assets/img/portfolio/safe.png"
                        modalTarget="#portfolioModal5"
                        title="Project 5"
                    /> */}
                    {/* <!-- Portfolio Item 6--> */}
                    {/* <PortfolioItem
                        imageURL="assets/img/portfolio/submarine.png"
                        modalTarget="#portfolioModal6"
                        title="Project 6"
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
