import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import catsImg from "../homeAssets/cat.jpg";
import cattleImg from "../homeAssets/cattle.jpeg";
import dogsImg from "../homeAssets/dog.jpeg";
import goatsSheepImg from "../homeAssets/goats_sheep.jpeg";
import horsesImg from "../homeAssets/horses.jpeg";
import poultryImg from "../homeAssets/poultry.jpeg";

const animals = [
  { name: "Cattle", image: cattleImg },
  { name: "Goats & Sheep", image: goatsSheepImg },
  { name: "Dogs", image: dogsImg },
  { name: "Cats", image: catsImg },
  { name: "Poultry", image: poultryImg },
  { name: "Horses & Donkeys", image: horsesImg },
];

const AnimalCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;
    const childRect = child.getBoundingClientRect();
    const containerRect = el.getBoundingClientRect();
    el.scrollTo({
      left: el.scrollLeft + childRect.left - containerRect.left,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % animals.length;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const handlePrev = () => {
    if (activeIndex === 0) return;
    const prev = activeIndex - 1;
    setActiveIndex(prev);
    scrollToIndex(prev);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-2">
          We Care For All Your Animals
        </h2>
        <p className="text-muted-foreground mb-8">
          From farm livestock to household pets, we handle a wide range of
          animals.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-20 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {animals.map((animal, i) => (
          <div
            key={animal.name}
            className={`relative flex-shrink-0 w-64 sm:w-72 lg:w-[calc(33.333%-12px)] xl:w-[calc(25%-12px)] h-96 lg:h-[480px] rounded-xl overflow-hidden snap-center transition-opacity duration-500 ${
              activeIndex === i ? "opacity-100" : "opacity-75"
            }`}
          >
            <img
              src={animal.image}
              alt={animal.name}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                activeIndex === i ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute bottom-4 left-0 w-full right-0 px-4">
              <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg w-full border border-white/20">
                <span className="text-lg text-white font-semibold">
                  {animal.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-20 flex gap-3 mt-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default AnimalCarousel;
