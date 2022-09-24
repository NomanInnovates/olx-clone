import React from "react";
import { Link } from "react-router-dom";
import "../../StyleSheet/itemDetails.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ItemDetail(props) {
  const { category, desc, company, price, location, time, title, url } =
    props.location.about.name;

  return (
    <div>
      <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
        <Header />
      </div>
      <div id="structure" style={{ width: "90%", margin: "0 auto" }}>
        <hr />

        <div style={{ borderRadius: "1%", marginLeft: "3%", marginTop: "3%" }}>
          <h6 className="text-dark">Home /{category} </h6>
        </div>
        <br />

        <div id="main">
          <img id="image" src={url} alt="" />
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div id="pricedaba">
              <div className="setMargin">
                <h1 style={{ marginTop: "3%" }} className="text-dark">
                  {" "}
                  Rs Price {price}
                </h1>
                <span className="text-secondary" style={{ fontSize: "20px" }}>
                  Title:{title}
                </span>
                <br />
                <div style={{ display: "flex" }}>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "15px", marginTop: "25px" }}
                  >
                    {location}
                  </p>
                  <p
                    className="text-secondary text-right"
                    style={{
                      fontSize: "15px",
                      marginTop: "25px",
                      marginLeft: "35%",
                    }}
                  >
                    {time}
                  </p>
                </div>
              </div>
            </div>
            <div id="sellerdaba">
              <div className="setMargin">
                <h4 style={{ marginTop: "3%" }} className="text-dark">
                  Seller description
                </h4>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      marginTop: "10px",
                      marginLeft: "10px",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                    }}
                    src=""
                    alt="seller img"
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      marginLeft: "20px",
                      fontWeight: "bolder",
                      marginTop: "20px",
                    }}
                  >
                    Seller Name
                  </p>
                </div>
              </div>
              <Link
                to="/chat"
                style={{
                  marginLeft: "5%",
                  marginTop: "4%",
                  fontSize: "19px",
                  width: "90%",
                }}
                className="btn btn-primary text-center"
              >
                Chat with seller
              </Link>
              <h6 style={{ marginTop: "4%" }} className="text-center text-dark">
                0300 0000000
              </h6>
              <div style={{ display: "flex" }}>
                <h4 style={{ marginTop: "1.5%" }} className="text-dark">
                  Posted In :{location}-
                </h4>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "15px",
                    marginLeft: "25%",
                    marginTop: "2.5%",
                  }}
                >
                  Location
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* This is the picture frame */}

        {/* This is the description */}
        <div id="disc">
          <div style={{ marginLeft: "4%" }}>
            <h4 style={{ marginTop: "3%" }} className="text-dark">
              Details :
            </h4>
            <div style={{ display: "flex" }}>
              <p
                style={{ marginLeft: "2%", fontWeight: "bolder" }}
                className="text-secondary"
              >
                Condition
              </p>
              <p
                className="text-dark"
                style={{ fontSize: "15px", marginLeft: "25%" }}
              >
                used
              </p>
            </div>
          </div>
          <hr />
          <div style={{ marginLeft: "4%" }}>
            <h4 style={{ marginTop: "3%" }} className="text-dark">
              Description :
            </h4>

            <p
              className="text-dark"
              style={{ fontSize: "15px", marginLeft: "2%" }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ItemDetail;
