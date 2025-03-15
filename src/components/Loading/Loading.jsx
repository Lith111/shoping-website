import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Giral from "../images/Loading.png";
import star from "../images/star.png";
import amazon from "../images/amazon-removebg-preview.png";
import handW from "../images/H_M-removebg-preview.png";
import levels from "../images/levels-removebg-preview.png";
import obey from "../images/obey-removebg-preview.png";
import lacoste from "../images/Lacoste-removebg-preview.png";
import shop from "../images/shop-removebg-preview.png";

const Loading = () => {
  return (
    <div className="mt-2">
      <Container fluid="md">
        <Card
          style={{
            backgroundColor: "#F4F6F5",
            borderRadius: "40px",
            padding: "25px 25px 0 25px",
            border: "none",
          }}
        >
          <Row>
            <Col lg={4}>
              <h1
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginBottom: "30px",
                  fontSize: "3.8rem",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                <span style={{ backgroundColor: "#fff", rotate: " -3deg" }}>
                  LET’S
                </span>
                <span>EXPLORE</span>
                <span style={{ backgroundColor: "#E6C744", rotate: " -3deg" }}>
                  UNIQUE
                </span>
                <span>CLOTHES</span>
              </h1>
              <p style={{ color: "#191818" }}>
                Live for Influential and Innovative fashion!
              </p>
              <Button
                style={{
                  backgroundColor: "#000",
                  outline: "none",
                  border: "none",
                }}
              >
                Shop Now
              </Button>
            </Col>
            <Col>
              <div
                style={{
                  width: " 90%",
                  marginLeft: "10%",
                  marginTop: "15%",
                  position: "relative",
                }}
              >
                <img
                  src={star}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "-10%",
                    left: "7%",
                    width: "6%",
                  }}
                />
                <img
                  src={star}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "20%",
                    width: "6%",
                  }}
                />
                <img
                  src={Giral}
                  alt=""
                  style={{
                    display: "block",
                    width: "70%",
                    margin: "auto",
                  }}
                />
                <img
                  src={star}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "0",
                    width: "6%",
                  }}
                />
                <img
                  src={star}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "10%",
                    width: "6%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
      <div
        className="pt-4 pb-4 brands mt-5 mb-5"
        style={{ backgroundColor: "#E6C744" }}
      >
        <Container>
          <Row
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={shop}
            ></Col>
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={amazon}
            ></Col>
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={handW}
            ></Col>
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={levels}
            ></Col>
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={obey}
            ></Col>
            <Col
              style={{ Width: "60px", height: "60px" }}
              xs="4"
              md="2"
              as={"img"}
              src={lacoste}
            ></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Loading;
