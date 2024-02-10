import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SocialMediaButtons.module.scss';

const SocialMediaButton = ({ href, src, alt, label }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
      <img src={src} alt={alt} className={styles.iconImage} />
      {label}
    </a>
  );
};

const SocialMediaButtons = ({ socialLinks }) => {
  return (
    <Container className={styles.socialButtonsContainer}>
      {socialLinks.map((link, index) => (
        <SocialMediaButton key={index} href={link.href} src={link.iconSrc} alt={link.name} label={link.name} />
      ))}
    </Container>
  );
};

export default SocialMediaButtons;
