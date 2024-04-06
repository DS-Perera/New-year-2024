import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Food = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="text-center">
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <img
              src="https://via.placeholder.com/800x600"
              alt="Large Image"
              className="img-fluid"
              style={{ width: '100%' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 1"
                style={{ position: 'absolute', top: '10%', left: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 2"
                style={{ position: 'absolute', top: '10%', right: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 3"
                style={{ position: 'absolute', top: '40%', left: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 4"
                style={{ position: 'absolute', top: '40%', right: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 5"
                style={{ position: 'absolute', top: '70%', left: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 6"
                style={{ position: 'absolute', top: '70%', right: '10%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 7"
                style={{ position: 'absolute', top: '10%', left: '45%', width: '20%' }}
              />
              <img
                src="https://via.placeholder.com/200"
                alt="Mock Image 8"
                style={{ position: 'absolute', top: '70%', left: '45%', width: '20%' }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Food;
