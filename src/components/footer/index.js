import React from "react";
import "../footer/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © 2020 <strong>Phan Jrr.99</strong>, <small>V1</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
