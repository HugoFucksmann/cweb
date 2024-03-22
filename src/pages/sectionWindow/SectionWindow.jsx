import React from "react";
import UiBorder from "../../components/uiBorder/UiBorder";
const SectionWindow = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        margin: 40,
        boxShadow:
          "0.8rem 0.8rem 1.1rem #c8d0e7, -0.2rem -0.2rem 1.8rem #ffffff",
        // border: "1px solid grey",
        borderRadius: 6,
      }}
    >
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "60%",
          margin: "auto",
        }}
      >
        <span
          style={{
            border: "1px solid #f2f2f2",
            boxShadow: "inset 1px 1px 3px grey",
            padding: "6px 14px",
            borderRadius: 12,
          }}
        >
          Design UI
        </span>
        <span
          style={{
            border: "1px solid #f2f2f2",
            boxShadow: "inset 1px 1px 3px grey",
            padding: "6px 14px",
            borderRadius: 12,
          }}
        >
          Design UX
        </span>
        <span
          style={{
            border: "1px solid #f2f2f2",
            boxShadow: "inset 1px 1px 3px grey",
            padding: "6px 14px",
            borderRadius: 12,
          }}
        >
          Funcionalidades
        </span>
      </div>
      <div style={{ padding: 22, backgroundColor: "#f2f2f2" }}>
        <UiBorder />
      </div>
    </div>
  );
};

export default SectionWindow;
