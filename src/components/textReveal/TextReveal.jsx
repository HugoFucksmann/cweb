import React from "react";
import "./textReveal.css";
const TextReveal = () => {
  const styles = {
    innershadow: {
      fontSize: "70px",
      fontWeight: "bold",
      backgroundColor: "#999",
      color: "transparent",
      textShadow: "inner 4px 5px 5px rgba(255,255,255,0.7)",
      WebkitBackgroundClip: "text",
      MozBackgroundClip: "text",
      backgroundClip: "text",
      textAlign: "center",
    },
  };
  return (
    <div class="hero">
      <h1 class="text-reveal">
        <span>HOLAAA</span>
        <span style={styles.innershadow}>TECH WAVE</span>
      </h1>
    </div>
  );
};

export default TextReveal;
