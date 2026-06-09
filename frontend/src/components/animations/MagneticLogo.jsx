import { useRef } from "react";
import gsap from "gsap";

const MagneticLogo = () => {
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = logoRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(logoRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(logoRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.3)",
    });
  };

  return (
    <h1
      ref={logoRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
      cursor-hover
        text-xl
        md:text-2xl
        font-bold
        tracking-tight
        px-4

        cursor-pointer
        hover:bg-(--primary-text-color)
        rounded-full
        w-fit
      "
    >
     <span className="py-4 bg-linear-to-r from-(--primary-text-color) to-(--primary-offwhite-color)
hover:text-black
        bg-clip-text
        text-transparent"> PORTFOLIO</span>
    </h1>
  );
};

export default MagneticLogo;