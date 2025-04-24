import "./Footer.css";
import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 footer">
      <Container>
        <h1 className="title mb-4">Our Service :</h1>
        <ListGroup>
          <ListGroup.Item className="px-0 bg-transparent border-0">
            &nbsp;1. Free Check Up (For Carry In User)
          </ListGroup.Item>
          <ListGroup.Item className="px-0 bg-transparent border-0">
            2. Cleaning and Repasta for Laptop All Brands
          </ListGroup.Item>
          <ListGroup.Item className="px-0 bg-transparent border-0">
            3. Pickup and Delivery
          </ListGroup.Item>
          <ListGroup.Item className="px-0 bg-transparent border-0">
            4. Rental and Contract Maintenance
          </ListGroup.Item>
        </ListGroup>
        <Button
          variant="dark"
          className="mt-3"
          onClick={() => window.open("https://wa.me/6283898305638", "_blank")}
        >
          My Contact
        </Button>
        <span className="text-footer d-block mt-5">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </span>
      </Container>
    </div>
  );
};

export default Footer;
