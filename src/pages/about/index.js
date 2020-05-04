import React, { Component } from "react";
import "../about/style.css";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import CV from "../../components/cv";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/about_particle.js";
import Particles from "react-particles-js";

class About extends Component {
  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview("About Screen");
  }

  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Phan Huy</title>
          <link rel="canonical" href="http://motasimfoad.com/about" />
          <meta name="description" content="" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Row className="About-main">
            <HamburgerMenu />
            <div className="d1">
              <CV />
            </div>
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;
