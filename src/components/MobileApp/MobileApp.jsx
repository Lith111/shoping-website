import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../images/Rectangle55.png";
import img2 from "../images/Rectangle18.png";
import mobile from "../images/Mobileapp.png";
import "./style.css";
const MobileApp = () => {
  return (
    <div className="" style={{ marginTop: "50px" }}>
      <Container>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <Col lg={5} md={12}>
            <div className="card-title" style={{}}>
              <h2 style={{ lineHeight: "180%", color: "#000" }}>
                DOWNLOAD APP & <br /> GET THE VOUCHER!
              </h2>
              <p style={{ width: "80%", lineHeight: "200%" }}>
                Get 30% off for first transaction using Rondovision mobile app
                for now.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                <a href="">
                  <img src={img} alt="" />
                </a>
                <a href="">
                  <img src={img2} alt="" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="mobile d-flex justify-content-center">
            <img src={mobile} style={{ width: "calc(60% + 30px)" }} alt="a" />
            <span id="first"></span>
            <span id="secondy"></span>
            <span id="laster"></span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileApp;
