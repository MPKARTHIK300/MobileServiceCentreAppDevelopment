import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="pot" style={styles.container}>
      <div>
        <h1 style={styles.heading}>Welcome to Online Mobile Service Center</h1>
        <p style={styles.paragraph}>
          At Mobile Service Center, we specialize in providing top-notch repairs
          and services for all mobile devices. Our team of skilled technicians
          is dedicated to ensuring your devices are in perfect working
          condition.
        </p>
        <p style={styles.paragraph}>
          Whether you need a screen replacement, battery repair, software
          troubleshooting, or any other mobile device service, we've got you
          covered. We work with various mobile brands and models, offering
          reliable solutions for all your needs.
        </p>
        <p style={styles.paragraph}>
          Our commitment to quality and customer satisfaction sets us apart. We
          use genuine parts and follow industry best practices to deliver
          exceptional results.
        </p>
        <p style={styles.paragraph}>
          Visit Mobile Service Center today and let our experts take care of
          your mobile repair needs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
  },
};

export default Home;
