import { FaLeaf, FaMedal, FaShieldAlt } from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: FaLeaf,
    title: "100% Natural",
    description:
      "Our dates are naturally grown without artificial preservatives or additives.",
  },
  {
    icon: FaMedal,
    title: "Premium Quality",
    description:
      "Carefully handpicked dates selected from the finest farms in Madinah.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Brand",
    description:
      "Committed to delivering authentic premium dates with exceptional quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section section">
      <div className="section-heading">
        <h2>Why Choose Our Dates</h2>
        <p>
          Freshness, premium quality, and authentic taste in every bite.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <article className="feature-card" key={item.title}>
              <div className="feature-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
