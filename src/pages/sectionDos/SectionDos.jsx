import React, { useState, useEffect } from "react";
import "./sectionDos.css";
import TextReveal from "../../components/textReveal/TextReveal";
const SectionDos = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Función para generar estrellas aleatorias
    const generateStars = () => {
      const newStars = [];
      // Generar un grupo de estrellas más lentas
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speed: 0.2 + Math.random() * 0.2, // Velocidad aleatoria entre 0.2 y 0.4
          angle: Math.random() * Math.PI * 2, // Dirección aleatoria
        });
      }
      // Generar un grupo de estrellas más rápidas
      for (let i = 200; i < 400; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speed: 0.4 + Math.random() * 0.3, // Velocidad aleatoria entre 0.6 y 0.9
          angle: Math.random() * Math.PI * 2, // Dirección aleatoria
        });
      }
      setStars(newStars);
    };

    // Generar estrellas al cargar el componente
    generateStars();

    // Función para mover las estrellas en cada frame
    const moveStars = () => {
      setStars((prevStars) => {
        return prevStars.map((star) => {
          // Calcular el desplazamiento en x e y basado en el ángulo
          const dx = Math.cos(star.angle) * star.speed;
          const dy = Math.sin(star.angle) * star.speed;

          // Calcular la nueva posición
          let newX = star.x + dx;
          let newY = star.y + dy;

          // Si la estrella sale del área visible, reiniciar su posición
          if (
            newX < 0 ||
            newX > window.innerWidth ||
            newY < 0 ||
            newY > window.innerHeight
          ) {
            newX = Math.random() * window.innerWidth;
            newY = Math.random() * window.innerHeight;
          }

          return {
            ...star,
            x: newX,
            y: newY,
          };
        });
      });
    };

    // Llamar a la función de mover estrellas en cada frame
    let animationId = requestAnimationFrame(function animate() {
      moveStars();
      animationId = requestAnimationFrame(animate);
    });

    // Limpiar la animación cuando el componente se desmonta
    return () => cancelAnimationFrame(animationId);
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <div>
      <div className="space-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{ left: star.x, top: star.y }}
          ></div>
        ))}
        <TextReveal />
      </div>
    </div>
  );
};

export default SectionDos;
