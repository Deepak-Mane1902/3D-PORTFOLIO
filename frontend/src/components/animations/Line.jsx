import { useEffect, useRef } from "react";
import gsap from "gsap";

const Line = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      markerRef.current,
      {
        y: -20,
      },
      {
        y: 40,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="liner flex flex-col sm:mt-0 sm:ml-0 md:mt-[-2vw] md:ml-[10vw] items-center sm:gap-5 md:gap-7">
      <div className="relative h-10  md:h-20 w-1.5  overflow-hidden bg-neutral-800">
        <div
          ref={markerRef}
          className="
            absolute
            left-0
            h-10
            rounded-full
            w-full
            bg-(--primary-text-color)
            shadow-[0_0_12px_rgba(72,170,255,.8)]
          "
        />
      </div>

      <p
        className="
          text-[10px]
          sm:text-xs
          sm:mt-[-25vw]
          md:mt-0
          md:text-[0.5em]
          tracking-[0.2em]
          sm:rotate-0
          md:rotate-90
          origin-center
          opacity-40
        "
      >
        SCROLL
      </p>
    </div>
  );
};

export default Line;