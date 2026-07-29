"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import products from "@/data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSlider.css";

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".product-card");
    if (!card) return;

    const gap = Number.parseInt(getComputedStyle(slider).gap, 10) || 0;
    const amount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="product-slider-section section">
      <div className="section-heading">
        <h2>Premium Dates</h2>
        <p>Hand-selected varieties chosen for taste, texture, and quality.</p>
      </div>

      <div className="slider-container">
        <button
          type="button"
          className="slider-arrow left-arrow"
          onClick={() => scroll("left")}
          aria-label="Scroll products left"
        >
          <FaChevronLeft />
        </button>

        <div className="product-slider" ref={sliderRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button
          type="button"
          className="slider-arrow right-arrow"
          onClick={() => scroll("right")}
          aria-label="Scroll products right"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
