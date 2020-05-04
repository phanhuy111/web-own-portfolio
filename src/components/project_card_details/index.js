import React, { useState, useEffect } from "react";
import "../project_card_details/style.css";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastsContainer, ToastsStore } from "react-toasts";

const git = [
  {
    id: 1,
    name: "Music Spotify",
    full_name: "phanhuy111/web-music-spotify",
    created_at: "20/4/2020",
    clone_url: "https://github.com/phanhuy111/web-music-spotify",
  },
  {
    id: 2,
    name: "Portfolio",
    full_name: "phanhuy111/portfolioJR",
    created_at: "02/5/2020",
    clone_url: "https://github.com/phanhuy111/portfolioJR",
  },
  {
    id: 3,
    name: "Shopping Shop",
    full_name: "phanhuy111/xong",
    created_at: "20/5/2018",
    clone_url: "https://github.com/phanhuy111/xong",
  },
  {
    id: 4,
    name: "Cinema",
    full_name: "phanhuy111/MERN-CINEMA",
    created_at: "10/4/2019",
    clone_url: "https://github.com/phanhuy111/MERN-CINEMA",
  },
];

const PCD = () => {
  return (
    <Row>
      {git.map((item) => (
        <Col xl={6} key={item.id}>
          <Card className="pro_card">
            <Row>
              <Col xl={12} className="project_img_container">
                <Image
                  className="project_card_left_img"
                  src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png"
                />
              </Col>
              <Col xl={12}>
                <Card.Text className="project_card_main">
                  <div className="repoName">Name: {item.name}</div>
                  <div className="repoInfo">
                    Location: {item.full_name} <br />
                    Created: {item.created_at}
                  </div>
                  <div>
                    <br />
                    <Button
                      variant="outline-light"
                      size="lg"
                      className="modal-exit-btn about_modal"
                    >
                      <CopyToClipboard
                        text={item.clone_url}
                        onCopy={() =>
                          ToastsStore.info("HTTPS url copied to clipboard 👍😬")
                        }
                      >
                        <span>Link Github</span>
                      </CopyToClipboard>
                    </Button>
                    <ToastsContainer store={ToastsStore} timer="10000" />
                  </div>
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default PCD;
