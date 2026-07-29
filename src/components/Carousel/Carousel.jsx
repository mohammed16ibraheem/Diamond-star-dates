"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { brandName } from "@/data/navigation";
import "./Carousel.css";

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "Premium Ajwa Dates",
    subtitle: "Freshly harvested from Madinah.",
  },
  {
    image: "/images/banner2.jpg",
    title: "Luxury Gift Boxes",
    subtitle: "Perfect for family and friends.",
  },
  {
    image: "/images/banner3.jpg",
    title: "100% Natural",
    subtitle: "Healthy. Delicious. Authentic.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="carousel" aria-roledescription="carousel" aria-label="Featured banners">
      <button
        type="button"
        className="carousel-arrow left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <div className="carousel-media">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          width={1400}
          height={550}
          className="carousel-image"
          sizes="(max-width: 480px) 100vw, (max-width: 992px) 94vw, 1280px"
          priority
        />
      </div>

      <div className="overlay" key={slide.title}>
        <p className="overlay-eyebrow">{brandName}</p>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </div>

      <button
        type="button"
        className="carousel-arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="dots" role="tablist" aria-label="Choose slide">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={current === index}
            aria-label={`Go to slide ${index + 1}: ${item.title}`}
            className={current === index ? "dot is-active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
