import "./Carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

function Caraousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla">
      <img
        src="/images/arrow-left.svg"
        alt=""
        className="scroll-left embla__prev"
        onClick={scrollPrev}
      />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla-container">{props.cardItems}</div>
      </div>
      <img
        src="/images/arrow-right.svg"
        alt=""
        className="scroll-right embla__next"
        onClick={scrollNext}
      />
    </div>
  );
}

export default Caraousel;
