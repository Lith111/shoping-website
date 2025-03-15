import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../images/image_12-removebg-preview.png";
import star from "../images/Star.png";
import "./PayDay.css";
const PayDay = () => {
  return (
    <div className="Pay mt-5 mb-5" style={{ backgroundColor: "#E6C744" }}>
      <Container fluid="lg">
        <Row className="" style={{ gap: "2rem" }}>
          <Col md={6}>
            <div
              className="card-img-parent"
              style={{
                position: "relative",
              }}
            >
              <img
                src={star}
                alt="a"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "0",
                  filter: "opacity(0.3)",
                }}
              />
              <img
                src={star}
                alt="a"
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "0",
                  filter: "opacity(0.3)",
                }}
              />
              <img
                className="img-card"
                src={img}
                alt="img"
                style={{ display: "block" }}
              />
              <img
                src={star}
                alt="a"
                style={{
                  position: "absolute",
                  top: "80%",
                  right: "0",
                  filter: "opacity(0.3)",
                }}
              />
              <img
                src={star}
                alt="a"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "0",
                  filter: "opacity(0.3)",
                }}
              />
            </div>
          </Col>
          <Col
            className="d-flex pb-3"
            style={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="m-auto card-text">
              <h2 className="mt-4 ">
                <span
                  style={{
                    display: "block",
                    backgroundColor: "#fff",
                    width: "fit-content",
                    fontSize: "3.5rem",
                    fontWeight: "900",
                    rotate: "-2deg",
                    padding: "0.5rem",
                    marginTop: "0.5rem",
                    letterSpacing: "4px",
                    marginBottom: "0.5rem",
                    color: "#000",
                  }}
                >
                  PAYDAY
                </span>
                <span
                  style={{
                    display: "block",
                    width: "max-content",
                    fontSize: "3rem",
                    fontWeight: "900",
                    letterSpacing: "4px",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    color: "#000",
                  }}
                >
                  SALE NOW
                </span>
              </h2>
              <p
                style={{
                  color: "#000",
                  // fontSize: "1.5rem",
                  fontWeight: "500",

                  wordSpacing: "3px",
                }}
              >
                <span style={{ display: "block", marginBottom: "10px" }}>
                  Spend minimal $100 get 30% off
                </span>{" "}
                voucher code for your next purchase
              </p>
              <p
                style={{
                  color: "#000",
                  // fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontWeight: "900",
                    marginBottom: "10px",
                  }}
                >
                  1 June - 10 June 2021
                </span>
                <span style={{ letterSpacing: "2px", wordSpacing: "6px" }}>
                  Terms & Conditions apply
                </span>
              </p>
              <Button
                variant="Black"
                style={{
                  backgroundColor: "#000",
                  marginTop: "5px",
                  color: "#fff",
                }}
              >
                Shop now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PayDay;
