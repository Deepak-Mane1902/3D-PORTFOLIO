import { useRef, useEffect } from "react";
import gsap from "gsap";

const Email = () => {
  const containerRef = useRef(null);
  const emailText = "manedeepak1902@gmail.com";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll(".scatter-letter");

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Calculate normalized horizontal mouse position inside the container (0 to 1)
      const relativeX = (e.clientX - rect.left) / rect.width;
      
      // Determine how many letters should be colored/scattered based on mouse position
      const targetIndex = Math.floor(relativeX * letters.length);

      letters.forEach((letter, index) => {
        if (index <= targetIndex && relativeX >= 0 && relativeX <= 1) {
          // Hovered / Passed letters: Change color & scatter randomly
          gsap.to(letter, {
            color: "var(--primary-offwhite-color, #ffffff)", // Fallback to white if variable missing
            x: (Math.random() - 0.5) * 10, // Scatter X between -5px and 5px
            y: (Math.random() - 0.5) * 12, // Scatter Y between -6px and 6px
            rotation: (Math.random() - 0.50) * 15, // Slight chaotic twist
            duration: 0.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        } else {
          // Remaining letters ahead of the cursor: Stay in default state
          gsap.to(letter, {
            color: "var(--primary-offtext-color, #6b7280)",
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    };

    const handleMouseLeave = () => {
      // Cleanly snap everything back to normal state when mouse exits
      gsap.to(letters, {
        color: "var(--primary-text-color, #6b7280)",
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.5,
        stagger: 0.01, // Smooth cascading snap-back effect
        ease: "elastic.out(1, 0.75)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full px-1 md:px-8 mt-[-8vh] flex overflow-hidden ">
      <a
        href={`mailto:${emailText}`}
        ref={containerRef}
        className="relative inline-block select-none cursor-pointer tracking-wide capitalize  font-black
                   text-[clamp(1.1rem,2vw,2rem)] md:text-[clamp(1.8rem,2.8vw,6rem)] font-[syne] leading-none text-center break-all"
        style={{ contextMenu: "none" }}
      >
        {emailText.split("").map((char, index) => (
          <span
            key={index}
            className="scatter-letter inline-block will-change-transform transition-shadow"
            style={{ color: "var(--primary-offwhite-color, #6b7280)" }}
          >
            {char}
          </span>
        ))}
      </a>
    </div>
  );
};

export default Email;