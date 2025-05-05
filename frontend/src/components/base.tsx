import React from "react";
import logo from "../assets/img/icon.png"; // Assurez-vous que le chemin est correct
const BaseBackground: React.FC = () => {
  return (
    <section style={styles.section}>
      {/* Titre en haut à gauche */}
      <div style={styles.headerTitle}>
        <img src={logo} alt="Logo" style={styles.icon} />
        <span style={styles.titleText}>Task Manager</span>
      </div>

      {/* Cercles animés */}
      <div style={styles.shape}>
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            style={{ ...styles.circle, ...styles[`circle${i + 1}`] }}
          />
        ))}
      </div>
    </section>
  );
};

export default BaseBackground;

// Styles en JS (inline)
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    position: "relative",
    height: "300px",
    backgroundColor: "#5e72e4", // fond bleu
    overflow: "hidden",
    color: "white",
    padding: "1rem",
  },
  headerTitle: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingTop: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  titleText: {
    fontSize: "1.5rem",
  },
  shape: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  circle: {
    position: "absolute",
    display: "block",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    animation: "move 6s infinite ease-in-out alternate",
  },
  circle1: { width: 80, height: 80, top: "10%", left: "15%" },
  circle2: { width: 120, height: 120, top: "20%", left: "70%" },
  circle3: { width: 100, height: 100, bottom: "15%", left: "10%" },
  circle4: { width: 140, height: 140, bottom: "20%", right: "15%" },
  circle5: { width: 60, height: 60, top: "50%", left: "50%" },
  circle6: { width: 90, height: 90, top: "30%", right: "25%" },
  circle7: { width: 75, height: 75, bottom: "10%", right: "40%" },
  separator: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100px",
  },
  svg: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  icon: {
    width: "32px",
    height: "32px",
    marginRight: "0.5rem",
  },
};
