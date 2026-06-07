import { ArrowDown, ClipboardPaste } from "lucide-react";
import Line from "./animations/Line";
import Pulse from "./animations/Pulse";

const Hero = () => {
  return (
    <main className="px-10 ">
      <div className="flex flex-row w-full h-full">
        <section className="w-3/2 h-100">
      
        <h1 className="font-[inter] hero-heading uppercase ">
        Aspirant <br/>
        <span className="text-(--primary-text-color)">Developer</span>
      </h1>
        <p className="py-7 px-2 text-(--primary-offwhite-color) w-2/4">
        lorem150 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
      </p>
      </section>

      <section className=" w-1/2 h-auto">
      
      <p className="py-10 pl-40 text-(--primary-text-color)">vol. 1 / 2026</p>

      {/* animation line */}
      <Line />

      {/*  */}
      <p className="ml-20 mt-35 border border-zinc-700 w-fit  px-6 py-1 rounded-full text-(--primary-text-color) flex gap-2 items-center">
        {/* <Pulse/> */}<ClipboardPaste size={20}/><a href="#">Download CV</a>
        </p>

      <p className="ml-20 mt-2 border border-zinc-700 w-fit  px-5 py-1 rounded-full text-(--primary-text-color)">
        <Pulse/>
        </p>
      
      </section>
      </div>

      <hr  className="mt-6 text-(--primary-text-color)" />

      <div className="mt-4 flex justify-between text-xs">
        <p className="text-xs px-1 text-(--primary-text-color)">P. 001</p>
        <p className="flex items-center gap-2 text-xs text-(--primary-text-color)"><ArrowDown size={18} /> SCROLL TO TUNE IN</p>
      </div>

    </main>
    
  )
}

export default Hero