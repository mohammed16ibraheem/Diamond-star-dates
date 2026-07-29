import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="section-heading">
        <h2>About Niemat Altayibat Food Products Factory</h2>
      </div>

      <div className="about-container">
        <div className="about-image">
          <Image
            src="/images/NiematAltayibat.png"
            alt="Niemat Altayibat Food Products Factory brand emblem"
            width={560}
            height={300}
            sizes="(max-width: 900px) 70vw, 480px"
          />
        </div>

        <div className="about-content">
          <span className="about-subtitle">Premium Dates</span>
          <h3>Bringing Nature&apos;s Finest Dates to Your Table</h3>
          <p>
            Niemat Altayibat Food Products Factory is dedicated to sourcing and packing premium
            Arabian dates with care. From classic Ajwa to golden Sukkari, every
            variety is selected for authenticity, freshness, and natural
            sweetness.
          </p>
          <p>
            We preserve the true taste and nutritional richness of each harvest
            so families and gift-givers can enjoy dates that feel as premium as
            they look.
          </p>
        </div>
      </div>
    </section>
  );
}
