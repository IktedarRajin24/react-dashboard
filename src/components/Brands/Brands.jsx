import React, { useEffect, useState, useRef } from "react";
import "./Brands.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Brands = ({ selectedBrand, onSelectBrand }) => {
  const [brands, setBrands] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch("/data/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      setTimeout(updateScrollButtons, 100);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden flex items-center">
      <MdChevronLeft
        className={`bg-primary_orange text-white rounded-full p-1 cursor-pointer absolute top-1/3 left-0 transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
        size={40}
        onClick={scrollLeft}
      />

      <div
        ref={scrollContainerRef}
        id="scrollbar"
        className="flex items-center gap-3 overflow-x-scroll scrollbar-hide"
      >
        {brands.map((brand) => (
          <button
            key={brand.name}
            className={`flex items-center justify-center gap-3 md:w-[319px] w-[200px] h-[89px] px-20 py-5 rounded-2xl border-2 border-border_color whitespace-nowrap ${
              selectedBrand === brand.id
                ? "bg-selected_bg border-primary_orange"
                : ""
            }`}
            onClick={() => onSelectBrand(brand.id)}
          >
            {brand.icon ? (
              <img
                src={brand.icon}
                alt={`${brand.name} icon`}
                className="md:w-14 w-7 md:h-14 h-7"
              />
            ) : (
              ""
            )}
            <span className="font-semibold">{brand.name}</span>
          </button>
        ))}
      </div>

      <MdChevronRight
        className={`bg-primary_orange text-white rounded-full p-1 cursor-pointer absolute top-1/3 right-0 transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
        size={40}
        onClick={scrollRight}
      />
    </div>
  );
};

export default Brands;
