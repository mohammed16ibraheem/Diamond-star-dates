"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dateVarieties from "@/data/dateVarieties";
import "./DateShowcase.css";

export default function DateShowcase() {
  const [current, setCurrent] = useState(0);
  const variety = dateVarieties[current];

  const goTo = (index) => {
    setCurrent((index + dateVarieties.length) % dateVarieties.length);
  };

  const changeSlide = (direction) => {
    if (direction === "next") {
      goTo(current + 1);
      return;
    }

    goTo(current - 1);
  };

  return (
    <section className="date-showcase section" aria-label="Date varieties">
      <div className="section-heading">
        <h2>Discover Our Date Varieties</h2>
        <p>Explore the unique character of each premium Saudi variety.</p>
      </div>

      <div className="showcase-wrapper">
        <button
          type="button"
          className="showcase-arrow left"
          onClick={() => changeSlide("prev")}
          aria-label="Previous variety"
        >
          <FaChevronLeft />
        </button>

        <div className="showcase-card" key={variety.id}>
          <div className="showcase-image">
            <Image
              src={variety.image}
              alt={variety.name}
              width={420}
              height={420}
              sizes="(max-width: 768px) 70vw, 380px"
            />
          </div>

          <div className="showcase-content">
            <h3>{variety.name}</h3>
            <p className="showcase-subtitle">{variety.subtitle}</p>
            <p>{variety.description}</p>

            <ul>
              {variety.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="showcase-arrow right"
          onClick={() => changeSlide("next")}
          aria-label="Next variety"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="showcase-dots" role="tablist" aria-label="Choose variety">
        {dateVarieties.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={current === index}
            aria-label={item.name}
            className={current === index ? "dot is-active" : "dot"}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
