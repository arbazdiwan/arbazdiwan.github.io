import React from "react";
import AboutSection from "./AboutSection";
import "./assets/css/styles.css";
import ContactSection from "./ContactSection";
import CopyrightSection from "./CopyrightSection";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import Navbar from "./NavBar";
import PortfolioSection from "./PortfolioSection";
import PortfolioModals from "./PortfolioModals";

const App = () => {
    return (
        <div>
            <Navbar />
            <HeaderSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <CopyrightSection />
            <PortfolioModals />
        </div>
    );
};

export default App;
