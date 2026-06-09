import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Manifest = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const words = headingRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        color: "#0B0B0A",
      },
      {
        color: "#48AAFF",
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const text = [
    ["MAKE", "IT", "FEEL."],
    ["MAKE", "IT", "MEAN"],
    ["SOMETHING"],
    ["KEEP", "IT", "RAW."],
  ];

  return (
    <main className="px-5 md:px-10 mt-20">
      <section>
        <h6 className="text-[10px] md:text-xs tracking-[0.25em] text-(--primary-text-color) font-[syne]">
          / MANIFESTO / P. 002
        </h6>

        <h1
          ref={headingRef}
      className="
  mt-12 md:mt-20
  font-[syne]
  font-extrabold
  leading-[0.9]
  tracking-tighter
  flex flex-col
  text-[14vw]
  md:text-[7vw]
  text-(--primary-offwhite-color)
"
        >
          {text.map((line, index) => (
            <div
              key={index}
              className={`
                flex flex-wrap gap-x-3
                ${index === 1 || index === 2 ? "md:pl-36" : ""}
                ${index === 2 ? "md:pl-36" : ""}
              `}
            >
              {line.map((word, i) => (
                <span
                  key={i}
                  className="
                    word
                    inline-block
                    text-[#1F1F23]
                    transition-colors
                  "
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </h1>

        <div className="flex justify-end mt-8">
          <h6 className="text-[10px] md:text-xs tracking-[0.25em] text-(--text-gray-color) font-[syne]">
            PORTFOLIO / 2026
          </h6>
        </div>
      </section>
    </main>
  );
};

export default Manifest;