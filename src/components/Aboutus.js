import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        Welcome to <strong>FoodieExpress</strong>, your trusted food delivery
        partner. We bring delicious meals from your favorite restaurants right
        to your doorstep — fresh, hot, and on time.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.text}>
        To connect people with great food effortlessly. Whether you’re craving
        biryani at midnight or a healthy salad after work, we’ve got you
        covered.
      </p>

      <h2 style={styles.subheading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li>⚡ Lightning-fast delivery</li>
        <li>🍔 Wide variety of cuisines</li>
        <li>💳 Secure and easy payments</li>
        <li>📍 Real-time order tracking</li>
      </ul>

      <p style={styles.footerText}>
        Thank you for choosing <strong>FoodieExpress</strong>. We’re here to
        serve you with love and flavor ❤️
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#e63946",
  },
  subheading: {
    fontSize: "1.5rem",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#1d3557",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "15px",
    color: "#333",
  },
  list: {
    marginLeft: "20px",
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
  footerText: {
    marginTop: "30px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#457b9d",
  },
};

export default AboutUs;
