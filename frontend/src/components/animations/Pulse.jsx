import { useEffect, useRef } from "react";
import gsap from "gsap";

const Pulse = () => {
  const pulseRef = useRef(null);

  useEffect(() => {
    gsap.to(pulseRef.current, {
      scale: 2.2,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="flex items-center gap-3 ">
      <div className="relative h-2.5 w-2.5">
        <div
          ref={pulseRef}
          className="absolute inset-0 rounded-full bg-green-500"
        />

        <div className="absolute inset-0 rounded-full bg-green-500" />
      </div>

      <span className="text-md font-[syne] font-medium text-green-500">
        Available for work
      </span>
    </div>
  );
};

export default Pulse;