import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://www.facebook.com/profile.php?id=100028997226081"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="fb" icon={faFacebook} />
      </a>
      <a
        href="https://github.com/phanhuy111"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://www.instagram.com/phanjr.99/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
