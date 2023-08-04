import React from "react";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { DiDjango, DiSass, DiPhotoshop, DiIllustrator, DiJavascript1 } from "react-icons/di";
import { BiLogoReact, BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript, BiLogoPython} from "react-icons/bi";
import { AiFillHtml5, AiOutlineHtml5  } from "react-icons/ai";
import { LiaBootstrap,  } from "react-icons/lia";
import { TbBrandCss3,  } from "react-icons/tb";




function Abilities() {  
  return (
    <div className="lg:flex gap-10 dark:bg-gray-800">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:shadow-none flex-1">

            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Design</h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
             

              <div className="flex justify-center gap-4">
                <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiIllustrator size='3rem' />Illustrator</p>
                <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiPhotoshop size='3rem' />Photoshop</p>
              </div>


            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:shadow-none flex-1">
            
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Development Tools</h3>
              <p className="py-2 dark:text-white">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>

              <div className="flex justify-center gap-4">
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiDjango size='3rem' />Django</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoReact size='3rem' />React</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoTailwindCss size='3rem' />Tailwind</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiSass size='3rem' />SASS</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><LiaBootstrap size='3rem' />Bootstrap</p>
              </div>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:shadow-none flex-1">
             
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500 ">Languages</h3>
              <p className="py-2 dark:text-white">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              
              <div className="flex justify-center gap-4">
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><AiOutlineHtml5 size='3rem'/>HTML</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><TbBrandCss3 size='3rem'/>CSS</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><DiJavascript1 size='3rem'/>Javascript</p>
              <p className="text-xl flex flex-col justify-center items-center gap-4 py-3 text-gray-600 dark:text-gray-400"><BiLogoPython size='3rem'/>Python</p>
              </div>
            </div>
          </div>
  );
}

export default Abilities;
