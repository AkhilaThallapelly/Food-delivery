import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍔 Oops!</h1>
      <h2 style={styles.subheading}>Something went wrong</h2>
      <p style={styles.message}>
        {error?.statusText || error?.message || "Unexpected error occurred."}
      </p>
      <Link to="/" style={styles.button}>Go Back Home</Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "#fff5f5",
    color: "#333",
    padding: "20px",
  },
  heading: {
    fontSize: "4rem",
    color: "#e63946",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#1d3557",
  },
  message: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    color: "#444",
    maxWidth: "500px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#e63946",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};
