import react from "react";

const PortfolioItem = ({imageURL, modalTarget, title, color}) => {
    return (
        <div className={"col-md-6 col-lg-4 mb-5 "} >
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={modalTarget} style={{backgroundColor:color, boxShadow:"0px 0px 0px black"}}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" >
                    <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>   <br />
                        {title}
                     </div>
                </div>
                <img className="img-fluid col" src={imageURL} alt="..." 
                style={{height:"250px", maxHeight:"250px", width:"200px", maxWidth:"300px", borderRadius:"50%"}}
                 />
            </div>
        </div>
    );
};

export default PortfolioItem;
