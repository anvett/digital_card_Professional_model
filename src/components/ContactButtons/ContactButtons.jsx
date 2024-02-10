import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ContactButtons.module.scss";

const ContactButton = ({ href, src, alt, label }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
      <img src={src} alt={alt} className={styles.icon} />
      {label}
    </a>
  );
};

const ContactButtons = ({ contacts }) => {
  return (
    <Container className={styles.contactButtonsContainer}>
      <Row>
        {contacts.map((contact, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <ContactButton {...contact} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactButtons;
