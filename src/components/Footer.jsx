import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-center w-full p-8 bg-black text-white">
      <h2 className="text-center md:text-left text-lg md:text-xl font-medium mb-4 md:mb-0">
        Let's Connect
      </h2>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/042Vidhi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="mailto:vidhijaiswal176@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-300">
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
