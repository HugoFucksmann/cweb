import "./landing.css";
import NeumorphicButtonsComponent from "./buttonsHome";

import SectionLayout from "../../layout/sectionLayout";

const Landing = () => {
  const styles = {
    innershadow: {
      fontSize: "70px",
      fontWeight: "bold",
      backgroundColor: "#999",
      color: "transparent",
      textShadow: "4px 5px 5px rgba(255,255,255,0.7)",
      WebkitBackgroundClip: "text",
      MozBackgroundClip: "text",
      backgroundClip: "text",
      textAlign: "center",
    },
  };

  return (
    <SectionLayout section={"inicio"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: 80,
        }}
      >
        <span style={styles.innershadow} className="montserrat-bold">
          TECH WAVE
        </span>

        <span
          style={{ ...styles.innershadow, fontSize: 50 }}
          className="montserrat-bold"
        >
          IMPULSA TU NEGOCIO
        </span>

        <NeumorphicButtonsComponent />
      </div>
    </SectionLayout>
  );
};

export default Landing;
