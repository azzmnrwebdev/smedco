import "./Footer.css";
import React, { useState } from "react";
import { Container, ListGroup, Button, Spinner } from "react-bootstrap";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      window.open("https://wa.me/6283898305638", "_blank");
      setLoading(false);
    }, 2000);
  };

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
        {loading ? (
          <Button variant="dark" disabled className="mt-3">
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Loading...
          </Button>
        ) : (
          <Button variant="dark" className="mt-3" onClick={handleClick}>
            My Contact
          </Button>
        )}
        <span className="text-footer d-block mt-5">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </span>
      </Container>
    </div>
  );
};

export default Footer;
