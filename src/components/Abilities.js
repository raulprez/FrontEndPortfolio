import React from "react";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobelightroom } from "react-icons/si";
import { DiDjango, DiSass, DiPhotoshop, DiIllustrator, DiJavascript1 } from "react-icons/di";
import { BiLogoReact, BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoWordpress,BiLogoShopify} from "react-icons/bi";
import { AiFillHtml5, AiOutlineHtml5  } from "react-icons/ai";
import { LiaBootstrap,  } from "react-icons/lia";
import { TbBrandCss3,  } from "react-icons/tb";




function Abilities() {  
  return (
    <div className="lg:flex gap-10 dark:bg-gray-800">

            <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-gray-800 dark:shadow-none flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Design</h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <div className="flex justify-center gap-6">
                <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><SiAdobeillustrator size='3rem' className="text-[#DC6920]" />Illustrator</p>
                <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><SiAdobephotoshop size='3rem' className="text-[#31A8FF]" />Photoshop</p>
                <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><SiAdobelightroom size='3rem' className="text-[#B4D6E0]" />Lightroom</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-gray-800 dark:shadow-none flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">CMS and E-commerce</h3>
              <p className="py-2 dark:text-white">
              Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <div className="flex justify-center gap-6">
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoWordpress size='3rem' className="text-[#00749C]"/>Wordpress</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoShopify size='3rem' className="text-[#95BF47]"/>Shopify</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-gray-800 dark:shadow-none flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Development Tools</h3>
              <p className="py-2 dark:text-white">
              Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <div className="flex justify-center gap-6">
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiDjango size='3rem' className="text-[#092E20] dark:text-[#ffffff]" />Django</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoReact size='3rem' className="text-[#61dafb]" />React</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoTailwindCss size='3rem' className="text-[#4BBBEB]" />Tailwind</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiSass size='3rem' className="text-[#CD679A]" />SASS</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><LiaBootstrap size='3rem' className="text-[#563d7c]" />Bootstrap</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl  dark:bg-gray-800 dark:shadow-none flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Languages</h3>
              <p className="py-2 dark:text-white">
              Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <div className="flex justify-center gap-6">
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><AiOutlineHtml5 size='3rem' className="text-[#e34c26]"/>HTML</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><TbBrandCss3 size='3rem' className="text-[#264de4]"/>CSS</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiJavascript1 size='3rem' className="text-[#F0DB4F]"/>Javascript</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoPython size='3rem' className="text-[#306998]"/>Python</p>
              </div>
            </div>
          </div>
  );
}

export default Abilities;
