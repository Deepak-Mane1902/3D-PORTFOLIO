import { MouseIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseScroll = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(arrowRef.current, {
      y: 20,
      opacity: 0.4,
      duration: 0.8,
      ease: "power2.inOut",
    }).to(arrowRef.current, {
      y: -20,
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, []);

  return (
    <button
      className="
        group
        flex
        items-center
        justify-center
        h-12
        w-12
        rounded-full
        border
        border-transparent
        transition-all
        duration-300
        hover:border-(--primary-text-color)
        hover:scale-110
      "
    >
    <MouseIcon
        ref={arrowRef}
        size={23}
        className="
          text-(--offwhite-color)
          sm:mt-[-3vh]
          md:mt-[-1vh]
          transition-all
          ease-in-out
          cursor-pointer
          duration-300
        "
      />
    </button>
  );
};

export default MouseScroll;