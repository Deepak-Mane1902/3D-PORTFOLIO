import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftData = [
  { label: "LANGS", value: "JavaScript • TypeScript • Java" },
  { label: "FRONT", value: "React • Next.js • Tailwind CSS" },
  { label: "BACK", value: "Node.js • Express • Spring Boot" },
  { label: "DATA", value: "MongoDB • MySQL • PostgreSQL" },
  { label: "TOOLS", value: "GSAP • Git • Figma" },
];

const rightData = [
  { label: "READ", value: "Atomic Habits • Deep Work" },
  { label: "CITY", value: "Mumbai → Pune" },
  { label: "BUILD", value: "Modern Web Experiences" },
  { label: "FOCUS", value: "Frontend Engineering" },
  { label: "NOW", value: "Learning Spring Boot" },
];

export default function InfoDetail() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const leftRowsRef = useRef([]);
  const rightRowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;

      // Red Progress Line
      gsap.fromTo(
        lineRef.current,
        {
          height: "0%",
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Titles
      gsap.from(".title-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Left Rows
      leftRowsRef.current.forEach((row) => {
        gsap.fromTo(
          row,
          {
            opacity: 0,
            x: isMobile ? 0 : -40,
            clipPath: "inset(0 100% 0 0)",
          },
          {
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });

      // Right Rows
      rightRowsRef.current.forEach((row) => {
        gsap.fromTo(
          row,
          {
            opacity: 0,
            x: isMobile ? 0 : 40,
            clipPath: "inset(0 100% 0 0)",
          },
          {
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      cursor-hover
      relative
      min-h-screen
      bg-(--primary-background-color)
      text-white
      overflow-x-hidden
      max-w-full
      px-6
      md:px-12
      lg:px-20
      py-20
      "
    >
      {/* Header */}

      <div className="mb-10  mt-20">
        <h6
          className="
          text-[11px]
          md:text-xs
          uppercase
          tracking-[0.35em]
          text-(--primary-offtext-color)
          font-medium
          "
        >
          / WHO AM I / P. 003
        </h6>
      </div>

      {/* Divider */}

      <div
        className="
        absolute
        left-4
        lg:left-1/2
        top-0
        h-full
        lg:-translate-x-1/2
        "
      >
        <div className="relative h-335 md:h-140  mt-56 md:mt-55 w-px bg-white/10">
          <div
            ref={lineRef}
            className="
            absolute
            top-0
            left-0
            w-full
            bg-(--primary-text-color)
            "
            style={{ height: "0%" }}
          />
        </div>
      </div>

      {/* Content */}

<div
  className="
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-16
  lg:gap-24
  w-full
  overflow-hidden
"
>
        {/* LEFT */}

        <div className="pl-12 lg:pl-0 order-2 min-w-0">
          <p
            className="
            text-(--primary-text-color)
            uppercase
            tracking-[0.3em]
            text-xs
            mb-10
            "
          >
            THE CODE
          </p>

          <h2
            className="
            text-(--primary-offwhite-color)
            title-reveal
            uppercase
            font-black
            leading-[0.88]
            tracking-tight
            text-[3rem]
            sm:text-[4rem]
            md:text-[5vw]
            wrap-break-word
            "
          >
            WHAT
          </h2>

          <h2
            className="
                        text-(--text-gray-color)
            title-reveal
            uppercase
            font-black
            leading-[0.88]
            tracking-tight
            text-[3rem]
            sm:text-[4rem]
            md:text-[5vw]
            wrap-break-word
            "
          >
            I BUILD
          </h2>

          <div className="mt-16">
            {leftData.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => (leftRowsRef.current[index] = el)}
                className="
                info-row
                flex
                flex-col
                sm:flex-row
                gap-2
                sm:gap-0
                py-5
                border-b
                border-white/10
                overflow-hidden
                "
              >
                <span
                  className="
                  w-24
                  shrink-0
                  text-(--primary-text-color)
                  text-xs
                  tracking-[0.25em]
                  "
                >
                  {item.label}
                </span>

                <span
className="
text-gray-300
text-sm
md:text-lg
wrap-break-word
min-w-0
max-w-full
"
>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="pl-8  lg:pl-0 order-2">
          <p
            className="
            text-(--primary-text-color)
            uppercase
            tracking-[0.3em]
            text-xs
            mb-10
            "
          >
            THE CULTURE
          </p>

          <h2
            className="
          text-(--text-gray-color)
            title-reveal
            uppercase
            font-black
            leading-[0.88]
            tracking-tight
            text-[3rem]
            sm:text-[4rem]
            md:text-[5vw]
            wrap-break-word
            "
          >
            WHAT
          </h2>

          <h2
            className="
            text-(--primary-offwhite-color)
            title-reveal
            uppercase
            font-black
            leading-[0.88]
            tracking-tight
            text-[3rem]
            sm:text-[4rem]
            md:text-[5vw]
            wrap-break-word
            "
          >
            MOVES ME
          </h2>

          <div className="mt-16">
            {rightData.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => (rightRowsRef.current[index] = el)}
                className="
                info-row
                flex
                flex-col
                sm:flex-row
                gap-2
                sm:gap-0
                py-5
                border-b
                border-white/10
                overflow-hidden
                "
              >
                <span
                  className="
                  w-24
                  shrink-0
                  text-(--primary-text-color)
                  text-xs
                  tracking-[0.25em]
                  "
                >
                  {item.label}
                </span>

                <span
className="
text-gray-300
text-sm
md:text-lg
wrap-break-word
min-w-0
max-w-full
"
>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grain Overlay */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-screen
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "8px 8px",
        }}
      />
    </section>
  );
}