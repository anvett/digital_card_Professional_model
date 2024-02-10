import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './ProfileImage.module.scss';

const ProfileImage = ({ src, alt, profileImageClassName, profileImageContainerClassName }) => {
  return (
    <Container className={`${styles.profileImageContainer} ${profileImageContainerClassName}`  } >
      <Image src={src} alt={alt} width={200} height={200} layout="responsive"   className={`${styles.profileImage} ${profileImageClassName}`} />
    </Container>
  );
};

export default ProfileImage;
