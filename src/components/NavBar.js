import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function NavBar() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [checkBoxText, setCheckBoxText] = useState('Light Mode');

  useEffect(() => {
    if (darkToggle) {
      document.body.classList.add('dark');
      setCheckBoxText('Dark Mode');
    } else {
      document.body.classList.remove('dark');
      setCheckBoxText('Light Mode');
    }
  }, [darkToggle]);

  const sunColor = darkToggle ? 'white' : 'black'; // Change the color as needed

  return (
    <nav className={`h-10 w-full bg-white dark:bg-gray-800 p-5 ${darkToggle ? 'dark' : ''}`}>
      <ul className='flex items-center justify-between px-8'>
        {/* <li>
        <img
            src={darkToggle ? "/LbWhite.png" : "/LbBlack.png"} 
            alt="Logo"
            className="h-12" 
          />
        </li> */}
        <li className='text-xl py-2 dark:text-white md:text-2xl flex items-center'>
        <img src={process.env.PUBLIC_URL + "/ProfilePicture2.png"} className="h-12 rounded-full" alt="Raul Perez" />
        <p className='pl-5 hidden md:block'>Front End Developer</p>
        </li>
        {/* <li>
          <a className="bg-teal-500 text-white px-4 py-1.5 border-none rounded-md" href="#"> Resume </a>
        </li> */}
        <li className='flex flex-col items-center'>
            <DarkModeSwitch checked={darkToggle} onChange={setDarkToggle} size={30} sunColor={sunColor}/>
              <label className="text-black dark:text-white" onClick={() => setDarkToggle(!darkToggle)}>
                {checkBoxText} 
              </label>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
