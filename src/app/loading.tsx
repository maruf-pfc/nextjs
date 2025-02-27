// components/Loading.tsx
const Loading: React.FC = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#3498db",
  },
};

export default Loading;
