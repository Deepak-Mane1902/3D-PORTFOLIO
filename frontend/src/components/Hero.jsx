import { ClipboardPaste } from "lucide-react";
import Line from "./animations/Line";
import Pulse from "./animations/Pulse";
import MouseScroll from "./animations/MouseScroll";
import HeroHeading from "./animations/HeroHeading";


const Hero = () => {
  return (
    <main className="px-4 md:px-10">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex justify-between w-full">
        {/* Left */}
        <section className="flex-1">
          <HeroHeading />
          <p className="mt-8 sm:ml-0 md:ml-4 max-w-xl opacity-60 text-(--primary-offwhite-color) sm:leading-relaxed md:leading-tight">
          Hi, myself <span className="text-(--primary-text-color)">Deepak_Mane</span> 👋, crafting digital experiences through code, creativity, and curiosity & focused on building impactful web applications with modern technologies and thoughtful design.
          </p>
        </section>

        {/* Right */}
        <section className="w-62.5 flex flex-col items-center">
          <p className="py-10 sm:ml-0 md:ml-30 text-(--primary-text-color) tracking-widest">
            VOL. 1 / 2026
          </p>

          <Line />

          <div className="sm:mt-0 md:mt-28 sm:ml-0 md:ml-18  flex flex-col gap-3">
            <a
              href="#"
              className="cursor-hover mHover
                border border-zinc-700
                rounded-full
                px-6 py-2 flex items-center gap-2
                transition-all
                ease-in-out
                duration-300
                hover:text-(--primary-text-color)
                hover:border-(--primary-text-color)
              "
            >
              <ClipboardPaste size={18} />
              Download CV
            </a>

            <div
              className="
                border border-green-800
                rounded-full
                px-5 py-2
                
              "
            >
              <Pulse />
            </div>
          </div>
        </section>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* Heading */}
        <div className="bg-black/30 p-4 ">
          <HeroHeading />
        </div>

        {/* Paragraph + Line */}
        <div className="grid grid-cols-[1fr_80px] gap-3 mt-4">

          <div className="bg-black/30  p-3">
            <p className="text-sm opacity-60 leading-relaxed text-(--primary-offwhite-color)">
         Hi, myself <span className="text-(--primary-text-color) ">Deepak_Mane</span> 👋, crafting digital experiences through code, creativity, and curiosity & focused on building impactful web applications with modern technologies and thoughtful design.
            </p>
          </div>

          <div
            className="
              bg-black/30
              flex flex-col
              items-center
              justify-center
              gap-2
              p-2
            "
          >
            <p className="text-[10px] text-(--primary-text-color)">
              VOL. 1 / 2026
            </p>

            <Line />
          </div>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">

          <a
            href="#"
            className="cursor-hover
              border border-zinc-700
              hover:text-(--primary-text-color)
              hover:border-(--primary-text-color)
              rounded-full
              py-3
              flex items-center
              justify-center
              gap-2
              text-sm
              transition-all
              ease-in-out
              duration-300
            "
          >
            <ClipboardPaste size={16} />
            Download CV
          </a>

          <div
            className="
              border border-green-800
              rounded-full
              py-3
              flex items-center
              justify-center
            "
          >
            <Pulse />
          </div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <hr className="mt-6 border-(--primary-text-color)" />

      <div className="sm:mt-3 md:mt-4  flex justify-between items-center">
        <p className="text-[10px] md:text-xs text-(--primary-offwhite-color)">
          P. 001
        </p>
        <p className="sm:ml-0 md:ml-18 sm:mt-[-0.9vw] md:mt-0"><MouseScroll/></p>
        <p
          className="
            flex items-center gap-2
            text-[10px]
            md:text-xs
            text-(--primary-text-color)
          "
        >
          {/* <ArrowDown size={12} /> */}
          SCROLL TO TUNE IN
        </p>
      </div>
    </main>
  );
};

export default Hero;