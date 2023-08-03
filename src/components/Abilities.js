import React from "react";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { DiDjango, } from "react-icons/di";
import { BiLogoReact, } from "react-icons/bi";





function Abilities() {  
  return (
    <div className="lg:flex gap-10 dark:bg-gray-800">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-600 flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <SiAdobephotoshop />
              <p className="text-gray-800 py-1">Illustrator</p>
              <SiAdobeillustrator/>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Django</p>
              <DiDjango/>
              <p className="text-gray-800 py-1">React</p>
              <BiLogoReact />
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">SASS</p>
              <p className="text-gray-800 py-1">SASS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
             
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
  );
}

export default Abilities;
