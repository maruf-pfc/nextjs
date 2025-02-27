// pages/404.tsx
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  header: {
    fontSize: "3rem",
    color: "#e74c3c",
  },
  message: {
    fontSize: "1.2rem",
    color: "#333",
  },
  link: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#3498db",
    textDecoration: "underline",
  },
};

export default NotFound;
