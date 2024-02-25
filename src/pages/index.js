import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import Footer from "@/components/Footer/Footer";
import CustomNavbar from "@/components/Navbar/Navbar";
import styles from "../styles/variants/variant1.module.scss";
import Services from "@/components/Services/Services";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import SocialMediaButtons from "@/components/SocialMediaButtons/SocialMediaButtons";
import ContactButtons from "@/components/ContactButtons/ContactButtons";
import Slider from "@/components/Slider/Slider";


export default function Modelo2() {
  const items = [
    {
      title: "Cirugía General",
      institution: "Universidad Central de Venezuela",
      year: "2008",
      description: "Especialidad en Cirugía general y laparoscopía mínimamente invasiva.",
      logo: "/images/education/u_caracas.png",
    },
    {
      title: "Cirugía Oncológica Digestiva",
      institution: "Universitat de Barcelona",
      year: "2023",
      description:
        "Cirugía laparoscópica mínimamente invasiva. Prevención, diagnóstico, tratamiento y seguimiento de pacientes oncológicos.",
      logo: "/images/education/u_barcelona.png",
    },
  ];

  // const images = [
  //   {
  //     thumbnail: "/images/users/traumatologo_iess.jpg",
  //     full: "/images/users/traumatologo_iess.jpg",
  //     description: "Médico Iess El Batán",
  //     alt: "Servicio de Traumatología Iess El Batán",
  //     experience: [
  //       "Especialista con enfoque en trastornos musculoesqueléticos.",
  //       "Actualizado en técnicas ortopédicas avanzadas para una atención de calidad.",
  //       "Amplia experiencia en atención médica general en el Hospital del IESS El Batán, ofreciendo cuidado integral y personalizado a los pacientes.",
  //     ],
  //   },
  //   {
  //     thumbnail: "/images/users/traumatologo_met.jpg",
  //     full: "/images/users/traumatologo_met.jpg",
  //     description: "Traumatólogo Clínica MET",
  //     alt: "Servicio de Traumatología Clínica Met",
  //     experience: [
  //       "Implementación de técnicas ortopédicas modernas para recuperaciones eficientes.",
  //       "Enfoque en tratamientos individualizados, promoviendo una rápida y efectiva recuperación de los pacientes.",
  //     ],
  //   },
  // ];

  const carouselImages = [
    
    // {
    //   src: "/images/users/cirugia.jpeg",
    //   alt: "Cirugía imagen",
    //   title: "Cirugía General",
    //   // description: ["Cirugía General", "Cirugía laparoscopica mínimamente invasiva"],
    // },
    {
      src: "/images/users/cirugia2.jpeg",
      alt: "Nutrición imagen",
      title: "Cirugía General y Laparoscópica",
      // description: ["Prevención,diagnóstico, tratamiento y seguimiento de pacientes oncologicos"],
    },
    {
      src: "/images/users/cirugia3.jpeg",
      alt: "Nutrición imagen",
      title: "Cirugía Oncológica Digestiva",
      // description: ["Cirugía laparoscopica mínimamente invasiva"],
    },
    {
      src: "/images/users/cirugia5.jpg",
      alt: "Nutrición imagen",
      title: "Cirugía Laparoscópica",
      // description: ["Cirugía laparoscopica mínimamente invasiva"],
    },
    {
      src: "/images/users/cirugia6.jpg",
      alt: "Nutrición imagen",
      title: "Especialista al cuidado de pacientes oncológicos",
      //experience: ["Cirugía laparoscopica mínimamente invasiva"],
    },
  ];

  const service = [
    {
      service: "Cirugía General",
      description: " Especialidad en Cirugía general y laparoscopía mínimamente invasiva. Caracas Venezuela",
      imageUrl: "/images/users/cirugia3.jpeg",
    },
    {
      service: "Cirugía Oncológica Digestiva ",
      description: "Cirugía laparoscópica mínimamente invasiva. Barcelona España. Prevención, diagnóstico, tratamiento y seguimiento de pacientes oncológicos.",
      imageUrl: "/images/users/cirugia_oncologica_digestiva.jpg",
    },
    
    {
      service: "Soporte paliativo pacientes oncológicos",
      description: "Procedimientos con objetivos específicos para aliviar los síntomas y mejorar la calidad de vida de pacientes oncológicos, manteniendo su independencia y autonomía. Barcelona España ",
      imageUrl: "/images/users/cuidados_paliativos.jpg",
    },
    {
      service: "Nutrición y Dietética",
      description: "Evaluar, educar, diseñar planes nutricionales personalizados acorde con las necesidades. Manejo nutricional de pacientes oncológicos. Barcelona España",
      imageUrl: "/images/users/consulta2.jpeg",
    },
  ];

  // const socialLinks = [
  //   {
  //     name: 'Facebook',
  //     iconSrc: "/icons/facebook_g.png",
  //     href: 'https://www.facebook.com'
  //   },
  //   {
  //     name: 'Instagram',
  //     iconSrc: "/icons/instagram_g.png",
  //     href: 'https://www.twitter.com'
  //   },
  //   {
  //     name: 'Tik Tok',
  //     iconSrc: "/icons/tiktok_g.png",
  //     href: 'https://www.twitter.com'
  //   },
    
  // ];

  // const contacts = [
  //   {
  //     href: "tel:+1234567890",
  //     src: "/icons/phone-icon.png", // Asegúrate de que esta ruta sea correcta
  //     alt: "Phone",
  //     label: "Llámanos",
  //   },
  //   {
  //     href: "mailto:email@example.com",
  //     src: "/icons/email-icon.png", // Asegúrate de que esta ruta sea correcta
  //     alt: "Email",
  //     label: "Envíanos un correo",
  //   },
  //   {
  //     href: "https://wa.me/+1234567890",
  //     src: "/icons/whatsapp-icon.png", // Asegúrate de que esta ruta sea correcta
  //     alt: "WhatsApp",
  //     label: "WhatsApp",
  //   },
  //   {
  //     href: "https://t.me/usernameTelegram",
  //     src: "/icons/telegram-icon.png", // Asegúrate de que esta ruta sea correcta
  //     alt: "Telegram",
  //     label: "Telegram",
  //   },
  //   {
  //     href: "https://maps.google.com/?q=Ubicación",
  //     src: "/icons/location-icon.png", // Asegúrate de que esta ruta sea correcta
  //     alt: "Location",
  //     label: "Encuéntranos",
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Dra. Yulexis Flores</title>
        <meta name="description" content="Dra. Yulexis Flores Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://drayulexisflores.businessdigicards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Dra. Yulexis J. Flores L." />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://drayulexisflores.businessdigicards.com/images/shared_image.png"
        />
      </Head>

      <Layout>
        <CustomNavbar
          logoSrc="/images/users/logo.png"
          logoClassName={styles.navbarLogo}
          navClassName={styles.nav}
          navLinkClassName={styles.navLink}
        />
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            <Col xs={12} className={styles.infoCol}>
              <section id="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage
                    src="/images/users/profile.jpeg"
                    alt="Dra. Yulexis Flores"
                    profileImageClassName={styles.profileImage}
                    profileImageContainerClassName={styles.profileImageContainer}
                  />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="Dra. Yulexis J. Flores L."
                  title="Médico Cirujano General"
                  description="Especialista en Cirugía General y Laparoscópica. Cirugía Oncológica Digestiva. Cirugía robótica y de mínima invasión. Nutrición y Dietética. Medicina paliativa. "
                  nameClassName={styles.personalInfoName}
                  titleClassName={styles.personalInfoTitle}
                  descriptionClassName={styles.personalInfoDescription}
                />
              </section>
              <section id="contacto" className={styles.socialMediaSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/yulexis.flores.96"
                    facebookIcon="/icons/facebook_f.png"
                    // twitter="https://twitter.com/NelsinhoTV"
                    // twitterIcon="/icons/green_gb/xtwitter_gb.png"
                    instagram="https://www.instagram.com/draflores/"
                    instagramIcon="/icons/instagram_f.png"
                    // linkedin="https://www.linkedin.com/userlinkedin"
                    // linkedinIcon="/icons/green_gb/linkedin_gb.png"
                    //  youtube="https://www.youtube.com/useryoutube"
                    //  youtubeIcon="/icons/black/youtube_b.png"
                    //pinterest="https://www.pinterest.com/userpinterest"
                    //pinterestIcon="/icons/black/pinterest_b.png"
                    //   snapchat="https://www.snapchat.com/usersnapchat"
                    //   snapchatIcon="/icons/black/snapchat_b.png"
                    //   reddit="https://www.reddit.com/userreddit"
                    //   redditIcon="/icons/black/reddit_b.png"
                    //   tumblr="https://www.tumblr.com/usertumblr"
                    //   tumblrIcon="/icons/black/tumblr_b.png"
                    tiktok="https://www.tiktok.com/@yulexisflores0"
                    tiktokIcon="/icons/tiktok_f.png"
                  />

                  {/* Columna con información de contacto */}

                  <section className={styles.contactButtons}>
                    <ContactIcons
                      phone="+593986845992"
                      phoneIcon="/icons/call_f.png"
                      email="draflores_85@hotmail.com"
                      emailIcon="/icons/mail_f.png"
                      whatsapp="+593986845992"
                      whatsappIcon="/icons/whatsapp_f.png"
                      telegram="+593986845992"
                      telegramIcon="/icons/telegram_f.png"
                      location={"Clínica Infes, Quito, Ecuador"}
                      locationIcon="/icons/ubicacion_f.png"
                    />

                    <WhatsAppButton
                      phone="+593986850295"
                      message="Hola, me gustaría saber más sobre tus servicios"
                      stylesButton={styles.whatsappButtonContact}
                    />

                    

                    {/* <SocialMediaButtons socialLinks={socialLinks} /> */}
                  </section>
                </motion.div>
              </section>
              <section className={styles.imageSection}>
                <Image
                  src="/images/users/hero.jpg"
                  alt="Profesional de la salud"
                  width={600}
                  height={400}
                  layout="responsive"
                  className={styles.backgroundImage}
                />
              </section>
            </Col>
          </Row>

          {/* Componente de educación y certificaciones */}

          <Row>
            <Col className={styles.educationSection}>
              <section id="education">
                <div className={styles.educationText}>
                  <h2 className={styles.educationTitle}>Educación y Certificaciones</h2>
                  <span className={styles.educationInstructions}>
                    Haz clic en el logo para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.educationInfo}>
                    <EducationAndCertifications
                      items={items}
                      itemClassName={styles.educationItem}
                      logoClassName={styles.educationLogo}
                      titleClassName={styles.educationItemTitle}
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de experiencia laboral */}

          {/* <Row>
            <Col className={styles.imageGallery}>
              <div className={styles.imageGalleryText}>
                <h2 className={styles.imageGalleryTitle}>Experiencia laboral</h2>
                <span className={styles.imageGalleryInstructions}>
                  Haz clic en la imagen para ver la información
                </span>
              </div>

              <ImageGallery
                images={images}
                imageDescriptionClassName={styles.imageDescription}
                thumbnailClassName={styles.thumbnail}
                modalDescriptionClassName={styles.modalDescription}
              />
            </Col>
          </Row> */}

          {/* Componente de servicios y/o especialidades */}

          <Row>
            <Col className={styles.servicesSection}>
              <section id="education">
                <div className={styles.servicesText}>
                  <h2 className={styles.servicesTitle}>Especialidades</h2>
                  <span className={styles.servicesInstructions}>
                    Haz clic en el item para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente Carruseles de imágenes */}

          <Row>
            <Col className={styles.imageCarousel}>
              <div className={styles.imageCarouselContainer}>
                <h2 className={styles.imageCarouselTitle}>Experiencia y calidad</h2>
                <span className={styles.imageCarouselInstructions}>
                  La salud es lo más importante, confía en un profesional
                </span>
                
                <Slider slides={carouselImages} />
              </div>
              <WhatsAppButton
                phone="+593986850295"
                message="Hola, me gustaría saber más sobre tus servicios"
              />

            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/users/video_traumato.mp4" />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div className={styles.paymentText}>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <span className={styles.paymentInstructions}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2210124721"
                      accountType="Cuenta de ahorros"
                      identification="1758913766"
                      email="draflores_85@hotmail.com"
                      bankLogo="/images/banksLogos/bancoPichincha_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Produbanco"
                      accountNumber="12725040101"
                      accountType="Cuenta de ahorros"
                      identification="1758913766"
                      email="draflores_85@hotmail.com"
                      bankLogo="/images/banksLogos/produbanco_b.png"
                    />
                    <PaymentInfo
                      bankName="Banco Guayaquil"
                      accountNumber="29333853"
                      accountType="Cuenta de ahorros"
                      identification="1758913766"
                      email="draflores_85@hotmail.com"
                      bankLogo="/images/banksLogos/bancoGuayaquil_b.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section>
                <QRCodeComponent qrCodeImageUrl="images/qrcode-yFlores.png" altText="QR Code" />
              </section>
              <p className={styles.scanText}>Escanea tu código para acceder</p>
            </Col>
          </Row>

          {/* Componente de footer */}
          <Row>
            <Col className={styles.footerCol}>
              <Footer
                footerClassName={styles.footerClassName}
                containerFooterClassName={styles.containerFooterClassName}
                textFooterClassName={styles.textFooterClassName}
                linkFooterClassName={styles.linkFooterClassName}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
