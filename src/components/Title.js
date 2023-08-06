import React from "react";
import { AiOutlineInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";


function Title() {
  return (
    <div className="text-center p-10 pt-20 dark:bg-gray-800">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Raul Perez
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Front End Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
      Hi there! I'm Raul Perez, a self-taught front-end developer with a background in marketing.
      Feel free to get in touch with me through the social media links below. Let's work together and create something amazing!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillGithub />
        <AiFillFacebook />
        <AiOutlineInstagram />
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">

      </div>
    </div>
  );
}

export default Title;
