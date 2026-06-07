import { useEffect, useRef } from "react";
import gsap from "gsap";

const Line = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      markerRef.current,
      {
        y: -80,
      },
      {
        y: 320,
        duration: 1.5,
        repeat: -1,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="flex items-center text-center">
          <div className="flex  justify-center py-20 pl-50 mt-[-9vw]">
      <div className="relative h-14 w-1.5 overflow-hidden  bg-neutral-800">
        <div
          ref={markerRef}
          className="absolute left-0 h-20 w-full rounded-full bg-(--primary-text-color) shadow-[0_0_25px_rgba(239,68,68,0.8)]"
        />
      </div>
    </div>
      <p className="rotate-90 text-[0.8vw] ml-[-2vw] tracking-wider">SCROLL</p>
    </div>
  );
};

export default Line;