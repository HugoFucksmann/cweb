import "./index.css";

import SectionLayout from "../../layout/sectionLayout";

const Planes = () => {
  const cardsInfo = [
    {
      name: "BASIC",
      price: "£50",
      features: [
        "30 day free trial",
        "50gb storage space",
        "20% discount",
        "24 hour support",
      ],
    },
    {
      name: "BUSINESS",
      price: "£80",
      features: [
        "40 day free trial",
        "100gb storage space",
        "25% discount",
        "24 hour support",
      ],
    },
    {
      name: "PREMIUM",
      price: "£130",
      features: [
        "50 day free trial",
        "200gb storage space",
        "40% discount",
        "24 hour support",
      ],
    },
  ];

  return (
    <SectionLayout section={"planes"}>
      <div className="price-table-wrapper">
        {cardsInfo.map((card, index) => (
          <div className="pricing-table">
            <h2 className="pricing-table__header">- {card.name} -</h2>
            <h3 className="pricing-table__price">{card.price}</h3>
            <a
              target="_blank"
              className="pricing-table__button"
              href="http://www.digimadmedia.com"
            >
              Join Now!
            </a>
            <ul className="pricing-table__list">
              {card.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Planes;
