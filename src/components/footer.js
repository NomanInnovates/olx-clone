import React from 'react'
import "../StyleSheet/footer.css"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-block">
            <div className="block">
                <h2 className="titles">POPULAR CATEGORIES</h2>
                <a href="#">Cars</a>
                <a href="#">Mobile phones</a>
                <a href="#">Flats for rent</a>
                <a href="#">Jobs</a>
            </div>
            <div className="block">
                <h2 className="titles">TRENDING SEARCHES </h2>
                <a href="#">Cars</a>
                <a href="#">Mobile phones</a>
                <a href="#">Flats for rent</a>
                <a href="#">Jobs</a>
            </div>
            <div className="block">
                <h2 className="titles">ABOUT US</h2>
                <a href="#">Cars</a>
                <a href="#">Mobile phones</a>
                <a href="#">Flats for rent</a>
                <a href="#">Jobs</a>
            </div>
            <div className="block">
                <h2 className="titles">OLX </h2>
                <a href="#">Cars</a>
                <a href="#">Mobile phones</a>
                <a href="#">Flats for rent</a>
                <a href="#">Jobs</a>
            </div>
            {/* <div className="block">
                <h2>FOLLOW US </h2>
                <a href="#">Cars</a>
                <a href="#">Mobile phones</a>
                <a href="#">Flats for rent</a>
                <a href="#">Jobs</a>
            </div> */}
            </div>
            <div className="bottomBar">
            <div className="footerCopyRight">
            <div className="footerLeft">Other Countries South Africa - Indonesia - Bangladesh</div>
            <div className="footerRight">Free Classified in Pakistan. &copy; 2020-2025</div>
            </div></div>
        </div>
    )
}

export default Footer
