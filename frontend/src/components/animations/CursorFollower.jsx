import { useEffect, useRef } from "react";
import gsap from "gsap";
import CursorPulse from "./CursorPulse";

const CursorFollower = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const glow = glowRef.current;
    const dot = dotRef.current ;

    const moveCursor = (e) => {
      // Smooth outer glow
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });

      // Fast inner dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power3.out",
      });
    };

    const hoverElements =
      document.querySelectorAll(".cursor-hover");

    const handleEnter = () => {
      // Glow becomes ring
      gsap.to(glow, {
        width: 60,
        height: 60,
        opacity: 1,
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: "#71717a",
        filter: "blur(0px)",
        duration: 0.3,
        ease: "power3.out",
      });

      // Hide dot
      gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      // Restore glow
      gsap.to(glow, {
        width: 40,
        height: 40,
        opacity: 0.25,
        backgroundColor: "#48AAFF",
        borderWidth: 0,
        filter: "blur(16px)",
        duration: 0.3,
        ease: "power3.out",
      });

      // Restore dot
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Glow Layer */}
      <div
        ref={glowRef}
        className="
          fixed
          top-0
          left-12
          z-9998
          h-3
          w-20
          rounded-full
          bg-(--cursor-offred-color)
          pointer-events-none
          border
          border-transparent
        "
        style={{
          filter: "blur(16px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="
          fixed
          top-0
          left-12
          z-9999
          h-6
          text-center
          w-20
          rounded-full
          bg-(--cursor-border-color)
          pointer-events-none
          py-1 px-3
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className=""><CursorPulse/></span>
      </div>
    </>
  );
};

export default CursorFollower;