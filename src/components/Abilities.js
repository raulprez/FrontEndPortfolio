import React, { useState } from "react";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobelightroom } from "react-icons/si";
import { DiDjango, DiSass, DiPhotoshop, DiIllustrator, DiJavascript1 } from "react-icons/di";
import { BiLogoReact, BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoWordpress,BiLogoShopify, BiCheck, BiLogoJquery} from "react-icons/bi";
import { AiFillHtml5, AiOutlineHtml5  } from "react-icons/ai";
import { LiaBootstrap,  } from "react-icons/lia";
import { TbBrandCss3,  } from "react-icons/tb";

function Abilities() {  

  const [selectedCategory, setSelectedCategory] = useState("All");

  const abilities = [
    {title: 'HTML', skillset: 'Development', icon: <AiOutlineHtml5 size='4.5rem' className="text-[#e34c26]"/>},
    {title: 'CSS', skillset: 'Development', icon: <TbBrandCss3 size='4.5rem' className="text-[#264de4]"/>},
    {title: 'Javascript', skillset: 'Development', icon: <DiJavascript1 size='4.5rem' className="text-[#F0DB4F]"/>},
    {title: 'Python', skillset: 'Development', icon: <BiLogoPython size='4.5rem' className="text-[#306998]"/>},
    {title: 'Django', skillset: 'Development', icon: <DiDjango size='4.5rem' className="text-[#092E20] dark:text-[#ffffff]"/>},
    {title: 'React', skillset: 'Development', icon: <BiLogoReact size='4.5rem' className="text-[#61dafb]"/>},
    {title: 'Tailwind', skillset: 'Development', icon: <BiLogoTailwindCss size='4.5rem' className="text-[#4BBBEB]"/>},
    {title: 'SASS', skillset: 'Development', icon: <DiSass size='4.5rem' className="text-[#CD679A]"/>},
    {title: 'Bootstrap', skillset: 'Development', icon: <LiaBootstrap size='4.5rem' className="text-[#563d7c]"/>},
    {title: 'Wordpress', skillset: 'CMS', icon: <BiLogoWordpress size='4.5rem' className="text-[#00749C]"/>},
    {title: 'Shopify', skillset: 'E-commerce', icon: <BiLogoShopify size='4.5rem' className="text-[#95BF47]"/>},
    {title: 'Illustrator', skillset: 'Design', icon: <DiIllustrator size='4.5rem' className="text-[#DC6920]"/>},
    {title: 'Photoshop', skillset: 'Design', icon: <DiPhotoshop size='4.5rem' className="text-[#31A8FF]"/>},
    {title: 'Lightroom', skillset: 'Design', icon: <SiAdobelightroom size='4.5rem' className="text-[#B4D6E0]"/>},
  ];

  const buttons = [
    { name: "All", value: "All" },
    { name: "Development", value: "Development" },
    { name: "CMS", value: "CMS" },
    { name: "E-commerce", value: "E-commerce" },
    { name: "Design", value: "Design" }
  ];

  const filteredAbilities =
    selectedCategory === "All"
      ? abilities
      : abilities.filter((ability) => ability.skillset === selectedCategory);

      return (
        <div className="text-center dark:bg-gray-800 h-screen p-5">
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Abilities
          </h3>
          <div className="flex flex-wrap">
            {buttons.map(({ name, value }) => (
              <button
              key={name}
              value={value}
              onClick={() => setSelectedCategory(value)}
              className={`${
                selectedCategory === value
                  ? "ring-black dark:bg-white ring-1 font-bold"
                  : "ring-gray-300 ring-opacity-50 ring-1 text-gray-700 dark:text-white"
              } px-3 py-2 rounded-full m-1 relative flex items-center`}
            >
              <span
                className={`${
                  selectedCategory === value
                    ? "bg-black"
                    : "ring-gray-300 ring-opacity-50 ring-1"
                } w-4 h-4 rounded-full flex items-center justify-center mr-2`}
              >
                {selectedCategory === value && <BiCheck size="1rem" className="text-white" />}
              </span>
              {name}
            </button>
            ))}
          </div>
    
          <div className="flex gap-5 flex-wrap justify-center">
            {filteredAbilities.map((ability) => (
              <div key={ability.title}>
                <p className="text-gray-800 dark:text-gray-200 p-5">
                  {ability.icon} {ability.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Abilities;
