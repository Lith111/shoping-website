import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import CardArr from "../CardArr/CardArr";

const Favourite = () => {
  return (
    <div>
      <Container>
        <Title title={"Young’s Favourite"} />
        <Row className="mt-5">
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg="6"
            md="12"
          >
            <CardArr
              type={true}
              Title={"Trending on instagram"}
              img={"Rectangle49.png"}
            />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg="6"
            md="12"
          >
            <CardArr
              Title={"All Under $40"}
              type={true}
              img={"Rectangle50.png"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Favourite;
