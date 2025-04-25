import "./Header.css";
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/images/header.png";

const Header = () => {
  return (
    <div className="header">
      <Container style={{ height: "100%" }}>
        <Row className="py-5">
          <Col md={6} lg={5} xl={4}>
            <motion.div
              initial={{ opacity: 0, translateY: "-100%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="title mb-3">
                SMEdCo IT
                <br />
                Service
              </h1>
              <h4 className="subtitle text-danger mb-5 mb-md-0">
                Trusted and better guarantee
              </h4>
            </motion.div>
            <motion.img
              src={headerImage}
              alt="Foto"
              className="img-fluid d-md-none"
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5 }}
            />
            <motion.p
              className="description mt-3 text-center text-md-start"
              initial={{ opacity: 0, translateX: "-100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5 }}
            >
              SMEdco IT Service repair involves fixing broken or malfunctioning
              parts of your laptop, MacBook and PC.
            </motion.p>
          </Col>

          <Col md={6} lg={7} className="d-none d-md-block offset-xl-1">
            <motion.img
              src={headerImage}
              alt="Foto"
              className="header-image"
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
