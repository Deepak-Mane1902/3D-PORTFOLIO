import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    page: "P. 004",
    title: "MEMOIR",
    subtitle: "A journal on design culture",
    subtitleColor: "#9b7fe8",
    description:
      "A personal journal exploring intersections of music, architecture and design — the frequencies that shape how we build and feel.",
    tags: ["ASTRO", "GSAP", "TYPESCRIPT", "TAILWIND"],
    year: "2025",
    categories: ["DESIGN", "ARCHITECTURE", "MUSIC"],
    bg: "#0a0a0a",
  },
  {
    id: "02",
    page: "P. 005",
    title: "DENTOS",
    subtitle: "Dental ERP system",
    subtitleColor: "#4ecdc4",
    description:
      "Modular practice management suite: digital odontogram, patient records, scheduling, billing, and staff time tracking — all in one unified interface.",
    tags: ["REACT", "NEXT.JS", "MONGODB", "NODE.JS", "TYPESCRIPT"],
    year: "2024",
    categories: ["SAAS", "HEALTHCARE", "FULLSTACK"],
    bg: "#080c0b",
  },
  {
    id: "03",
    page: "P. 006",
    title: "ATLAS",
    subtitle: "Interactive world data",
    subtitleColor: "#e8a87c",
    description:
      "A geospatial exploration tool built to surface hidden patterns in global datasets — climate, migration, economics — rendered as living maps.",
    tags: ["D3.JS", "MAPBOX", "REACT", "PYTHON"],
    year: "2024",
    categories: ["DATA", "VISUALIZATION", "GEO"],
    bg: "#0a0909",
  },
];

const GRAIN_BG = `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)`;

export default function ProjectScroll() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // ── NATIVE GSAP SMOOTH SCROLL (LENIS ENGINE) ──
    let lenis;
    import("@studio-freight/lenis").then((LenisModule) => {
      lenis = new LenisModule.default({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      function update(time) {
        lenis.raf(time);
        requestAnimationFrame(update);
      }
      requestAnimationFrame(update);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    });

    // Unified Master Animation Config (Applies to all screens)
    const track = trackRef.current;
    const totalCards = projects.length;
    
    // FIXED: Changed back to -1 so all cards pass through fully
    const scrollAmount = (totalCards - 1) * 100; 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, 
        start: "top top",
        end: () => `+=${(totalCards - 2) * window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Slide track horizontally leftwards
    tl.to(track, {
      xPercent: -scrollAmount,
      ease: "none",
    });

    // Parallax typography and card content fade triggers
    const cards = gsap.utils.toArray(".proj-card");
    cards.forEach((card) => {
      const title = card.querySelector(".proj-title");
      const content = card.querySelector(".proj-content");

      gsap.fromTo(
        title,
        { xPercent: 5 },
        {
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        content,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: "left 80%",
            end: "left 35%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&display=swap');

        html.lenis {
          height: auto;
        }
        .lenis-scrolling iframe {
          pointer-events: none;
        }

        .proj-mono {
          font-family: 'Courier Prime', 'Courier New', monospace;
        }
        .proj-display {
          font-family: 'Bebas Neue', 'Arial Black', sans-serif;
          letter-spacing: -0.02em;
        }
        .proj-tag {
          font-family: 'Courier Prime', monospace;
          border: 1px solid rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.8);
          font-size: 11px;
          letter-spacing: 0.18em;
          padding: 6px 14px;
          text-transform: uppercase;
          background: transparent;
          transition: border-color 0.2s, color 0.2s;
        }
        .proj-tag:hover {
          border-color: rgba(255,255,255,0.8);
          color: #fff;
        }
        .proj-link {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #48AAFF;
          text-decoration: none;
          border-bottom: 1px solid #48AAFF;
          padding-bottom: 2px;
          transition: opacity 0.2s;
        }
        .proj-link:hover { opacity: 0.7; }
        
        .proj-track {
          display: flex;
          flex-direction: row;
          width: ${projects.length * 100}vw;
          height: 100vh;
          will-change: transform;
        }
        .proj-card {
          position: relative;
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          overflow: hidden;
        }
        .proj-title {
          line-height: 0.88;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
        }

        .proj-content {
          position: absolute;
          top: 50%;
          left: clamp(24px, 5vw, 80px);
          transform: translateY(-50%);
          max-width: 480px;
          z-index: 5;
        }
        .proj-right-panel {
          position: absolute;
          bottom: clamp(32px, 5vw, 60px);
          right: clamp(24px, 5vw, 80px);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 18px;
        }
        .proj-divider {
          position: absolute;
          bottom: clamp(90px, 10vw, 120px);
          right: clamp(24px, 5vw, 80px);
          width: 220px;
          height: 1px;
          background-color: #48AAFF;
          z-index: 10;
          opacity: 0.8;
        }

        /* ── OPTIMIZED MOBILE LAYOUT OVERRIDES (KEEPS TRACK HORIZONTAL) ── */
        @media (max-width: 640px) {
          .proj-content {
            top: 40%;
            left: 20px;
            right: 20px;
            max-width: 90%;
          }
          .proj-content .proj-desc {
            margin-bottom: 20px;
            max-width: 100%;
          }
          .proj-right-panel {
            bottom: 24px;
            right: 20px;
            gap: 12px;
          }
          .proj-divider {
            bottom: 85px;
            right: 20px;
            width: 120px;
          }
          .proj-title {
            font-size: clamp(70px, 18vw, 140px) !important;
            top: 15% !important;
            left: 5% !important;
          }
        }
      `}</style>

      <div ref={containerRef} style={{ overflow: "hidden", width: "100%" }}>
        <div ref={trackRef} className="proj-track">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="proj-card"
              style={{ backgroundColor: proj.bg }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: GRAIN_BG,
                  backgroundSize: "8px 8px",
                  opacity: 0.4,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                className="proj-mono"
                style={{
                  position: "absolute",
                  top: "clamp(20px, 5vw, 48px)",
                  left: "clamp(20px, 5vw, 80px)",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  color: "#48AAFF",
                  textTransform: "uppercase",
                  zIndex: 10,
                }}
              >
                / STUFF I BUILT / {proj.page}
              </div>

              <div
                className="proj-display proj-title"
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "40%",
                  fontSize: "clamp(120px, 22vw, 340px)",
                  color: "#9F9F9F",
                  zIndex: 1,
                  opacity: 0.15, // Lowered text opacity slightly so text layers legibly on mobile screens
                }}
              >
                {proj.title}
              </div>

              <div className="proj-content">
                <p
                  className="proj-mono"
                  style={{
                    fontSize: "clamp(13px, 1.4vw, 16px)",
                    color: proj.subtitleColor,
                    letterSpacing: "0.05em",
                    marginBottom: "14px",
                    fontStyle: "italic",
                  }}
                >
                  {proj.subtitle}
                </p>

                <p
                  className="proj-mono proj-desc"
                  style={{
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                  }}
                >
                  {proj.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>

                <div
                  className="proj-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.25)",
                    textTransform: "uppercase",
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  {projects.indexOf(proj) === projects.length - 1 ? (
                    // Accessibility touch for mobile links inside last slider card
                    <span style={{color: '#48AAFF'}}>SCROLL DOWN NEXT ↓</span>
                  ) : (
                    proj.categories.map((c) => <span key={c}>{c}</span>)
                  )}
                </div>
              </div>

              <div className="proj-right-panel">
                <span
                  className="proj-mono"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {proj.year}
                </span>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
                  <a href="#" className="proj-link">VIEW PROJECT &nbsp;→</a>
                  <a href="#" className="proj-link">VISIT SITE &nbsp;↗</a>
                </div>
              </div>

              <div className={"proj-divider"} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}