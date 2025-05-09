import React, { useEffect, useState } from "react";
import SlideImage from "./SlideImage";
import ArrowButton from "./ArrowButton";

function Carousel() {
  const slides = [
    "https://images.uzum.uz/d013patpb7fbmqmoge7g/main_page_banner.jpg",
    "https://images.uzum.uz/cug7q9ui4n324lr7tl6g/main_page_banner.jpg",
    "https://images.uzum.uz/d049tutpb7f46s8834u0/main_page_banner.jpg",
    "https://images.uzum.uz/cvcg2f5pb7f9qcni5d30/main_page_banner.jpg",
    "https://images.uzum.uz/d03iom6i4n37npapm310/main_page_banner.jpg",
    "https://images.uzum.uz/d03ipak7fd1idpht5mo0/main_page_banner.jpg",
    "https://images.uzum.uz/cvn8hvlpb7fbmqmm7hrg/main_page_banner.jpg",
    "https://images.uzum.uz/d049pps7fd1idphtb4t0/main_page_banner.jpg",
    "https://images.uzum.uz/cvuempmi4n37npaoj9e0/main_page_banner.jpg",
    "https://images.uzum.uz/d03ipsdpb7f46s87tj20/main_page_banner.jpg",
    "https://images.uzum.uz/cqd66gffrr885gh2n6hg/main_page_banner.jpg",
    "https://images.uzum.uz/cvueg3dpb7fbmqmntfk0/main_page_banner.jpg",
    "https://images.uzum.uz/d03315c7fd1idpht2pl0/main_page_banner.jpg",
    "https://images.uzum.uz/d03iqdmi4n37npapm3p0/main_page_banner.jpg",
    "https://images.uzum.uz/cvuejk47fd1p445sn70g/main_page_banner.jpg",
    "https://images.uzum.uz/cvuhnumi4n37npaokc40/main_page_banner.jpg",
    "https://images.uzum.uz/cvueautpb7fbmqmntc3g/main_page_banner.jpg",
    "https://images.uzum.uz/cvqbgqs7fd1p445rop3g/main_page_banner.jpg",
    "https://images.uzum.uz/cvv0nkui4n37npaomqo0/main_page_banner.jpg",
    "https://images.uzum.uz/cvuv0fui4n37npaom6jg/main_page_banner.jpg",
    "https://images.uzum.uz/d03niomi4n37npapnq4g/main_page_banner.jpg",
    "https://images.uzum.uz/d03i0rei4n37npapltrg/main_page_banner.jpg",
    "https://images.uzum.uz/d03ljgtpb7f46s87ugu0/main_page_banner.jpg",
    "https://images.uzum.uz/cvudrbc7fd1p445smrp0/main_page_banner.jpg",
    "https://images.uzum.uz/d04cuvc7fd1idphtcb6g/main_page_banner.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 py-5 h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden relative">
      <SlideImage
        src={slides[current]}
        alt="Slide"
        className="sm:w-full md:w-full h-full rounded-xl md:h-[350px] lg:h-[450px] hover:rounded-md object-cover transition-all duration-700"
      />
      <ArrowButton direction="left" onClick={prevSlide} />
      <ArrowButton direction="right" onClick={nextSlide} />
    </div>
  );
}

export default Carousel;
