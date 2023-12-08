//  icons
import React from 'react';
import {

  FiLinkedin,
  FiPhone,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project2 from './assets/img/projects/2.jpeg';
import Project3 from './assets/img/projects/3.jpeg';
import Project4 from './assets/img/projects/4.jpeg';



// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';

// testimonial images


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'project',
    href: 'portfolio',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/roshitha-makula-47a609220/',
    target:"_blank"
  },
  {
    icon: <FiMail />,
    href: 'mailto:roshithamakula@gmail',
    target:"_blank"
  },
  {
    icon: <FiGithub />,
    href: 'https://roshitha-makula.github.io/rmakula.github.io/',
    target:"_blank"
  },
  {
    icon: <FiMapPin />,
    href: 'https://www.google.com/maps/place/Saint+Louis+University/@38.6348279,-90.2362157,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a352e7a467:0x59f657a5d42e4d25!8m2!3d38.6348237!4d-90.2336408!16zL20vMDJ0ejl6?entry=ttu',
    target:"_blank"
  },
];

export const projectsData = [
 
  {
    id: '1',
    image: Project2,
    name: 'Disease Detector',
    category: 'Team Projects',
    info:" This project is used to detect the spoiled cotton plants",
    drive:"https://drive.google.com/drive/folders/1XbDamamZLXB2h20dpY5vw2hY3U_oaHri?usp=sharing",
    tech:"HTML | CSS | Javascript | BOOTSTRAP | NODE JS | ReactJS  "
  },
  {
    id: '2',
    image: Project3,
    name: 'App for Disease Detector',
    category: 'Team Projects',
    info:"It is an andriod app for detecting the spoiled cotton plants",
    drive:"https://drive.google.com/drive/folders/1XbDamamZLXB2h20dpY5vw2hY3U_oaHri?usp=sharing",
    tech:"React | Redux | CSS | NodeJs  "
  },
  {
    id: '3',

    image: Project4,
    name: 'Saree vaari ',
    category: 'Solo Projects',
    info:"A learing project for selling sarees online",
    drive:"https://drive.google.com/drive/folders/1XbDamamZLXB2h20dpY5vw2hY3U_oaHri?usp=sharing",
    tech:"HTML | CSS | Javascript| Bootstrap "
  },

];

// projects
export const projectsNav = [
  {
    name: 'My Projects',
  }
];

// skill
export const skills = [
  { name: 'HTML', image: SkillImg1, percent: 80 },
  { name: 'CSS', image: SkillImg2, percent: 80 },
  { name: 'Java Script', image: SkillImg3, percent: 80 },
  { name: 'React', image: SkillImg4, percent: 70 },
];

export const contact = [
  {
    icon: <FiMail />,
    title: 'for Quries',
    subtitle: 'contact me',
    description: 'roshithamakula@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Saint Louis University',
  },
  {
    icon: <FiPhone />,
    title: 'Mobile Number',
    subtitle: '1234567890',
  }
];
