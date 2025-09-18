

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        Have questions, feedback, or need support? We’d love to hear from you!  
        Reach out to us using the form below or through our contact details.
      </p>

      <form style={styles.form}>
        <label style={styles.label}>Name</label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Enter your email" style={styles.input} />

        <label style={styles.label}>Message</label>
        <textarea placeholder="Type your message" style={styles.textarea} />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.info}>
        <h2 style={styles.subheading}>Our Office</h2>
        <p style={styles.text}>📍 Hyderabad, India</p>
        <p style={styles.text}>📞 +91 98765 43210</p>
        <p style={styles.text}>✉️ support@foodieexpress.com</p>
      </div>
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
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#e63946",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
  info: {
    marginTop: "30px",
    textAlign: "center",
  },
};

export default ContactUs;
