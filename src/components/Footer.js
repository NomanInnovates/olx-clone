import "../StyleSheet/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <div className="block">
          <h2 className="titles">POPULAR CATEGORIES</h2>
          <span>Cars</span>
          <span>Jobs</span>
          <span>Mobile phones</span>
          <span>Flats for rent</span>
        </div>
        <div className="block">
          <h2 className="titles">TRENDING SEARCHES </h2>
          <span>Bikes</span>
          <span>Books</span>
          <span>Watchs</span>
          <span>Iphones</span>
        </div>
        <div className="block">
          <h2 className="titles">ABOUT US</h2>
          <span>OLX Blogs</span>
          <span>About Empg</span>
          <span>Contact info</span>
          <span>OLX for Bussiness</span>
        </div>
        <div className="block">
          <h2 className="titles">OLX </h2>
          <span>Help</span>
          <span>Site Map</span>
          <span>Term of use</span>
          <span>Privacy Policy</span>
        </div>

      </div>
      <div className="bottomBar">
        <div className="footerCopyRight">
          <div className="footerLeft">
            Other Countries South Africa - Indonesia - Bangladesh
          </div>
          <div className="footerRight">
            Free Classified in Pakistan. &copy; {new Date().getFullYear()}-{new Date().getFullYear() + 2}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
