import React from "react";
import SectionLayout from "../../layout/sectionLayout";

const cardsData = [
  { name: "card 1" },
  { name: "card 2" },
  { name: "card 3" },
  { name: "card 4" },
  { name: "card 5" },
  { name: "card 6" },
];

const CardsServices = () => {
  return (
    <SectionLayout section={"cardsServices"}>
      {cardsData.map((card) => (
        <Card key={card.name} item={card} />
      ))}
    </SectionLayout>
  );
};

const Card = ({ item }) => {
  return <> {item.name} </>;
};

export default CardsServices;
