import React from "react";
import SectionLayout from "../../layout/sectionLayout";
const DescripWeb = () => {
  return (
    <SectionLayout section={"descripcion"}>
      <div
        style={{
          border: "1px solid #fff",
          padding: 12,
          borderRadius: 12,
          boxShadow: "2px 2px 2px grey",
          width: "60%",
          margin: "auto",
        }}
      >
        <p>
          Tech Wave es una empresa de desarrollo web y mobile apasionada por
          crear soluciones digitales innovadoras y personalizadas que impulsan
          el éxito de nuestros clientes. Nuestra misión es convertir las ideas
          de nuestros clientes en realidad, brindándoles soluciones web y mobile
          de alta calidad, eficientes y seguras que les permitan alcanzar sus
          objetivos de negocio. En Tech Wave nos enorgullecemos de ofrecer un
          servicio de atención al cliente excepcional, basado en la comunicación
          constante y la transparencia. Te invitamos a conocer más sobre
          nuestros servicios y a contactarnos para solicitar un presupuesto sin
          compromiso.
        </p>
      </div>
    </SectionLayout>
  );
};

export default DescripWeb;
