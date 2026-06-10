
import Email from "./animations/Email";
import FootHeading from "./animations/FootHeading";
import Social from "./Social";

const Footer = () => {
  return (
    <main className="w-full min-h-full px-10 py-10">
        <h6
          className="
          text-[11px]
          md:text-xs
          uppercase
          tracking-[0.35em]
          text-(--primary-offtext-color)
          font-medium
          px-1
          md:px-12 
          "
        >
          / Right Now / P. 006
        </h6>

          <div className=" w-full flex flex-col md:flex-row gap-1 mt-1 items-center ">
            <span className="md:w-180 "><FootHeading/></span>
            <span className="w-110 md:w-full h-70 md:h-90">
              <img src="/images/boy-dog.png" alt="dog and boy" className="h-70 md:h-90 w-90 pl-15 md:pl-0 md:w-full" />
            </span>
            
            
          </div>
          
        <h6
          className="
          text-[11px]
          md:text-xs
          uppercase
          tracking-[0.25em]
          text-(--text-offgray-color)
          font-medium
          px-1
          md:px-8
          py-10 
          "
        >
          LET'S MAKE SOMETHING THAT MEANS SOMETHING.
        </h6>
        <span className="ml-[-100vw]">
          <Email/>
        </span>
        <hr className="mt-10 pt-2 md:pt-20 border-(--primary-offtext-color)" />
        <Social/>
    </main>
  )
}

export default Footer