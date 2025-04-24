import "./Header.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/images/header.png";

const Header = () => {
  return (
    <div className="header">
      <Container style={{ height: "100%" }}>
        <Row className="py-5">
          <Col md={6} lg={5} xl={4}>
            <h1 className="title mb-3">
              SMEdCo IT
              <br />
              Service
            </h1>
            <h4 className="subtitle text-danger mb-5 mb-md-0">
              Trusted and better guarantee
            </h4>
            <img src={headerImage} alt="Foto" className="img-fluid d-md-none" />
            <p className="description mt-3 text-center text-md-start">
              SMEdco IT Service repair involves fixing broken or malfunctioning
              parts of your laptop, MacBook and PC.
            </p>
          </Col>

          <Col md={6} lg={7} className="d-none d-md-block offset-xl-1">
            <img src={headerImage} alt="Foto" className="header-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
