import React from "react";
import PortfolioModal from "./PorfolioModal";

const PortFolioModals = () => {
    return (
        <div>
            {/* <!-- Portfolio Modals--> */}
            {/* <!-- Portfolio Modal 1--> */}
            <PortfolioModal
                modalID="portfolioModal1"
                title="Personal Website"
                body="It is a component-based single page application built using React."
                butonTitle="View Project"  
                projectURL="https://arbazdiwan.github.io/" 
                githubURL="https://github.com/arbazdiwan/arbazdiwan.github.io" 
                color="#eab676" 
                imageURL="assets/img/avataaars.svg" 
            />
            {/* <!-- Portfolio Modal 2--> */}
            <PortfolioModal
                modalID="portfolioModal2"
                title="Covid 19 Tracker"
                body="It is an android application that displays live statistical summary of Covid19 cases in various countries.  The application was built using Flutter framework."
                butonTitle="Download Application"  
                projectURL="https://drive.google.com/file/d/1ZjIvzv0hkPw5uNOp-uGNyrGfmk1BijcQ/view?usp=sharing" 
                githubURL="https://github.com/arbazdiwan/covid19_tracker" 
                color="#d7efef" 
                imageURL="assets/img/portfolio/covid19_tracker.png" 
            />
            
            {/* <!-- Portfolio Modal 3--> */}
            <PortfolioModal
                modalID="portfolioModal3"
                title="Crime Reporting App"
                body="It is an android application that can be used to report faster that the conventional system regardless of user's location. It also helps to notify user's journey to pre-added favourite contacts. It can send continuous location periodically to both favourite conacts as well as nearest police station. The application was built using Java, and backend was built using PHP."
                butonTitle="Download Application"  
                projectURL="" 
                githubURL="" 
                color="#2B2929" 
                imageURL="assets/img/portfolio/applogo.png" 
            />
            {/* <!-- Portfolio Modal 4--> */}
            <PortfolioModal
                modalID="portfolioModal4"
                title="Job Application System"
                body="A web application to automate and digitalize the conventional, multi-step job application system of the Sardar Patel University. Captured and Handled a huge amount of user data. Developed functionality to reuse entered data across other job  applications. It was built using ASP .NET & MSSQL."
                butonTitle="Close Window" 
                projectURL="" 
                githubURL="" 
                color="#1874a5" 
                imageURL="assets/img/portfolio/SPULOGOCompressed.jpg" 
            />
            {/* <!-- Portfolio Modal 5--> */}
            {/* <PortfolioModal
                modalID="portfolioModal5"
                title="Locked Safe"
                body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
                butonTitle="Close Window"
            /> */}
            {/* <!-- Portfolio Modal 6--> */}
            {/* <PortfolioModal
                modalID="portfolioModal6"
                title="Submarine"
                body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
                butonTitle="Close Window"
            /> */}
        </ div>
    );
};

export default PortFolioModals;
