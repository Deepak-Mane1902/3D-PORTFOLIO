import { ArrowUpRight } from "lucide-react";
import { socialMedia } from "../../constants"; // Adjust the path as needed

const Social = () => {
  return (
    <main className="  flex flex-col">
      <ul className="flex flex-wrap justify-center gap-8 md:gap-20 py-10 md:pb-1">
        {socialMedia.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-hover flex items-center gap-1 text-(--text-gray-color) hover:text-white transition-colors duration-300"
            >
              <span className="relative pb-1  md:text-2xl font-[syne] uppercase flex items-center">
                {social.name}
                <ArrowUpRight className="w-10 h-10" />
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
              </span>
              
            </a>
          </li>
        ))}
      </ul>
      <div className="list-none px-0 md:px-8 flex justify-between font-[inter] uppercase text-sm md:text-[1.3vw] pt-1 tracking-widest text-[#373734]">
          <li><span className="text-(--text-offgray-color)">&copy;</span> 2026 portfolio - deepak_mane</li>
          <li>build raw with intent</li>
      </div>
    </main>
  );
};

export default Social;