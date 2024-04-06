import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Mutti = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [isFloatingImageVisible, setFloatingImageVisible] = useState(true);
  const [floatingImagePosition, setFloatingImagePosition] = useState(0);
  const [overlappingImageId, setOverlappingImageId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState('');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0); // New state for floating image center position

  // Function to generate a random number between 1 and 5
  const generateRandomNumber = () => {
    const min = 1;
    const max = 5;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };

  useEffect(() => {
    generateRandomNumber(); // Generate random number when component is mounted
  }, []); // Empty dependency array ensures it runs only once on mount

  // Function to handle clicking on images
  const handleImageClick = () => {
    generateRandomNumber(); // Generate a new random number when an image is clicked
    setFloatingImagePosition(0); // Reset the position of the floating image
  };

  // Function to move the floating image
  useEffect(() => {
    if (isFloatingImageVisible) {
      const intervalId = setInterval(() => {
        const randomPosition = Math.floor(Math.random() * window.innerWidth);
        setFloatingImagePosition(randomPosition); // Set random position within the window width
      }, 500); // Increased interval duration for slower movement
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }
  }, [isFloatingImageVisible]);

  // Function to hide the floating image when it reaches the rightmost side
  useEffect(() => {
    if (floatingImagePosition >= window.innerWidth) {
      setFloatingImageVisible(false);
    } else if (floatingImagePosition <= 0) {
      setFloatingImageVisible(true);
    }
  }, [floatingImagePosition]);

  // Function to handle button click
  const handleButtonClick = () => {
    const floatingImage = document.getElementById('floatingImage');
    const floatingImageRect = floatingImage.getBoundingClientRect();

    // Calculate and set center position of x-axis for floating image
    setF(parseInt((floatingImageRect.left + floatingImageRect.right) / 2));

    // Check if any image is within the range of floatingImagePosition +/- 20 pixels
    if (
      Math.abs(f - a) <= 20 ||
      Math.abs(f - b) <= 20 ||
      Math.abs(f - c) <= 20 ||
      Math.abs(f - d) <= 20 ||
      Math.abs(f - e) <= 20
    ) {
      // Find the image ID and set it to selectedImageId
      if (Math.abs(f - a) <= 20) setSelectedImageId('image1');
      else if (Math.abs(f - b) <= 20) setSelectedImageId('image2');
      else if (Math.abs(f - c) <= 20) setSelectedImageId('image3');
      else if (Math.abs(f - d) <= 20) setSelectedImageId('image4');
      else if (Math.abs(f - e) <= 20) setSelectedImageId('image5');
    } else {
      setSelectedImageId('');
    }

    // Check if the floating image fully overlaps the lower image vertically
    const lowerImage = document.getElementById('image5');
    const lowerImageRect = lowerImage.getBoundingClientRect();
    if (
      floatingImageRect.top <= lowerImageRect.top &&
      floatingImageRect.bottom >= lowerImageRect.bottom
    ) {
      setOverlappingImageId(5); // Set the id of the overlapping image
    } else {
      setOverlappingImageId(0); // Set 0 if not fully overlapped
    }
  };

  // Function to handle center button click
  const handleCenterButtonClick = () => {
    // Add functionality here for center button click
    console.log('Center button clicked');
  };

  // Function to handle image load
  const handleImageLoad = () => {
    // Recalculate the center positions of x-axis after images are loaded
    handleButtonClick();
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        {/* Display the random number */}
        <Col className="text-center">
          <h1>Random Number: {randomNumber}</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        {/* Display the small assets */}
        {[1, 2, 3, 4, 5].map((assetNumber) => (
          <Col key={assetNumber} className="text-center" style={{ position: 'relative', zIndex: 1 }}>
            <img
              src={`https://via.placeholder.com/150`}
              alt={`Asset ${assetNumber}`}
              className={randomNumber === assetNumber ? "selected-asset" : ""}
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
              id={`image${assetNumber}`} // Add unique id to each image
              onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
            />
          </Col>
        ))}
      </Row>
      {isFloatingImageVisible && (
        <Row className="mt-3" style={{ position: 'relative', zIndex: 2 }}>
          <Col className="text-center">
            {/* Floating image */}
            <img
              src={`https://via.placeholder.com/150`}
              alt="Floating Image"
              style={{
                position: 'absolute',
                top: '50%',
                left: `${floatingImagePosition}px`, // Dynamically adjust the left position
                transform: 'translate(-50%, -50%)',
              }}
              id="floatingImage" // Add id to the floating image
            />
          </Col>
        </Row>
      )}
      <div className="mt-5 pt-5">
        <div className="mt-5 pt-5">
          <Row>
            <Col className="text-center">
              {/* Button at the bottom center */}
              <Button variant="primary" onClick={handleButtonClick}>Check Overlapping Image</Button>
              {/* Display overlappingImageId */}
              <p>Overlapping Image ID: {overlappingImageId}</p>
              {/* Display selectedImageId */}
              <p>Selected Image ID: {selectedImageId}</p>
              {/* Display center positions of x-axis */}
              <p>Center positions of x-axis: a={a}, b={b}, c={c}, d={d}, e={e}, f={f}</p>
              {/* Center button */}
              <Button variant="success" onClick={handleCenterButtonClick}>Center Button</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Mutti;
