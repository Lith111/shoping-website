import React from "react";
import Title from "../Title/Title";
import { Col, Container, Row } from "react-bootstrap";
import CardArr from "../CardArr/CardArr";
const Catalogue = () => {
  return (
    <div>
      <Container>
        <Title title={"NEW ARRIVALS"} />
        <Row className="mt-5">
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg="4"
            md="6"
            sm="12"
          >
            <CardArr Title={"Hoodies & Sweetshirt"} img="Rectangle20.png" />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg="4"
            md="6"
            sm="12"
          >
            <CardArr Title={"Coats & Parkas"} img="Rectangle21.png" />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg="4"
            md="6"
            sm="12"
          >
            <CardArr Title={"Tees & T-Shirt"} img="Rectangle22.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalogue;
