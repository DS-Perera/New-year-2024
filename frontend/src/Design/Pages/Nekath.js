import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
// Importing images individually
import image1 from "../Assets/001.jpg";
import image2 from "../Assets/002.jpg";
import image3 from "../Assets/003.jpg";
import image4 from "../Assets/004.jpg";
import image5 from "../Assets/005.jpg";
import image6 from "../Assets/006.jpg";
import image7 from "../Assets/007.jpg";
import image8 from "../Assets/008.jpg";
import b1 from "../Assets/b1.png";
import back from "../Assets/back.png";

const Nekath = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mainBackground">
      <div className="topBanner text-center">
        <div>
          <img src={b1} className="w-50 text-center mt-5 pt-5" />
          <br />
          <a href="/">
            <img src={back} className="w-25 text-center" />
          </a>
        </div>
      </div>
      <Container className="pb-5 pt-2">
        <Row>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image1)}
            >
              <img src={image1} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image2)}
            >
              <img src={image2} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image3)}
            >
              <img src={image3} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image4)}
            >
              <img src={image4} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image5)}
            >
              <img src={image5} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image6)}
            >
              <img src={image6} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container"
              onClick={() => handleImageClick(image7)}
            >
              <img src={image7} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          <Col className="mb-5" xs={12} sm={6} md={4} lg={3}>
            <div
              className="image-container mb-5"
              onClick={() => handleImageClick(image8)}
            >
              <img src={image8} alt="Image 1" className="img-fluid mb-3" />
            </div>
          </Col>
          {/* Repeat this for each image */}
          {/* Note: Adjust the image and alt attributes accordingly */}
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          {/* <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header> */}
          <Modal.Body>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full Screen Image"
                className="img-fluid"
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Nekath;
