import React from "react";
import DividerCustom from "./DividerCustom";

const PortfolioModal = ({ modalID, title, body, butonTitle, color, imageURL, projectURL, githubURL }) => {
    return (
        <div className="portfolio-modal modal fade" id={modalID} tabindex="-1" aria-labelledby={modalID} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content" style={{ height: "80%" }}>
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
                                    {/* <!-- Icon Divider--> */}
                                    {/* <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div> */}
                                    <DividerCustom />

                                    {/* <!-- Portfolio Modal - Image--> */}
                                    {/* <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." /> */}
                                    <div>
                                        <div className="portfolio-item mx-auto" style={{ backgroundColor: color }}>

                                            <img className="img-fluid col" src={imageURL} alt="..."
                                                style={{ maxHeight: "300px", maxWidth: "200px", borderRadius:"50%" }}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-4"> {body} </p>
                                    <div className="col">
                                    {
                                        projectURL ?
                                            <a className="btn btn-success" href={projectURL} target="_blank" style={{margin:"5px"}}>
                                                {/* <i className="fa fa-github fa-fw"></i> */}
                                                <i className="fa fa-fw fa-eye"></i> &nbsp;
                                                {/* <i class="fa fa-fw fa-external-link" ></i> */}
                                                {butonTitle}
                                            </a>
                                            :
                                            <span></span>
                                    }
                                    &nbsp;
                                    {
                                        githubURL ?
                                            <a className="btn btn-dark" href={githubURL} target="_blank"  style={{margin:"5px"}} >
                                                {/* <i className="fa fa-github fa-fw"></i> */}
                                                <i className="fab fa-fw fa-github"></i> &nbsp;
                                                {"View Code"}
                                            </a>
                                            :
                                            <span></span>
                                    }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
