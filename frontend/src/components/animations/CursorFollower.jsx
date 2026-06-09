import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CursorPulse from "./CursorPulse";

const CursorFollower = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  
  // State to dynamically control the inner cursor text/component
  const [cursorText, setCursorText] = useState(<CursorPulse />);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const glow = glowRef.current;
    const dot = dotRef.current;

    // Smooth cursor movement tracking mouse position
    const moveCursor = (e) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power3.out",
      });
    };

    // Trigger animations when entering elements
    const handleMouseOver = (e) => {
      const hoverEl = e.target.closest(".cursor-hover, .cursor-greet");
      if (!hoverEl) return;

      if (hoverEl.classList.contains("cursor-greet")) {
        setCursorText("👋 say hi");

        // Morph dot into the orange text badge smoothly
        gsap.to(dot, {
          scale: 1.4,
          backgroundColor: "#2C2C2C", 
          color: "#f97316",
          fontSize: "11px",
          fontWeight: "600",
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });

        // Hide glow element so background stays clean
        gsap.to(glow, { opacity: 0, duration: 0.2 });

      } else if (hoverEl.classList.contains("cursor-hover")) {
        gsap.to(glow, {
          width: 100,
          height: 100,
          opacity: 1,
          backgroundColor: "transparent",
          borderWidth: 2.8,
          borderColor: "#71717a",
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power3.out",
        });

        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power3.out",
        });
      }
    };

    // FIX: Clear animations completely when leaving elements
    const handleMouseOut = (e) => {
      // Find if we are moving out of our custom elements
      const currentEl = e.target.closest(".cursor-hover, .cursor-greet");
      const relatedEl = e.relatedTarget ? e.relatedTarget.closest(".cursor-hover, .cursor-greet") : null;
      
      // Only trigger leave if we are completely exiting the element boundaries
      if (!currentEl || currentEl === relatedEl) return;

      // Revert inner text container safely back to your pulse component
      setCursorText(<CursorPulse />);

      // Restore base glow layer layout
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

      // CRITICAL FIX: Reset every inline style property that was touched back to default
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        backgroundColor: "var(--cursor-border-color)",
        color: "transparent",
        fontSize: "0px",
        duration: 0.25,
        ease: "power3.out",
        clearProps: "fontSize,fontWeight,color" // Clears injected styles out completely
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Glow Layer */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-9998 h-10 w-10 rounded-full pointer-events-none"
        style={{
          backgroundColor: "var(--cursor-offred-color)",
          filter: "blur(16px)",
          transform: "translate(-50%, -50%)",
          opacity: 0.25,
        }}
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-9999 h-7 min-w-7 px-3 rounded-full pointer-events-none flex items-center justify-center text-[0px] tracking-wide"
        style={{
          backgroundColor: "var(--cursor-border-color)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="whitespace-nowrap select-none flex items-center justify-center">
          {cursorText}
        </span>
      </div>
    </>
  );
};

export default CursorFollower;