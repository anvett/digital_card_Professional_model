import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./QrCodeComponent.module.scss";

const QRCodeComponent = ({ qrCodeImageUrl, altText }) => {
  return (
    <Container className={styles.qrCodeContainer}>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image className={styles.image} src={qrCodeImageUrl} alt={altText} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default QRCodeComponent;
