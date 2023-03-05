import Head from 'next/head'
import Image from 'next/image'

import { motion } from "framer-motion"

import logowhite from '../public/logowhite.png'
import gradient from '../public/gradient.png'

import {BsFillMoonStarsFill, BsLightbulbFill} from 'react-icons/bs'
import { FaGithub , FaLinkedin , FaEnvelope } from "react-icons/fa";
import { SiAdobeillustrator, SiCss3, SiFigma, SiFirebase, SiFramer, SiHtml5, SiJavascript, SiNextdotjs, SiAdobephotoshop, SiReact, SiSass, SiTailwindcss, SiTypescript, SiVercel, SiGithub } from "react-icons/si";
import { GiHamburgerMenu } from 'react-icons/gi'

import ai from '../public/techs/ai.png'
import css from '../public/techs/css.png'
import figma from '../public/techs/figma.png'
import firebase from '../public/techs/firebase.png'
import framer from '../public/techs/framer.png'
import html from '../public/techs/html.png'
import js from '../public/techs/js.png'
import next from '../public/techs/next.png'
import ps from '../public/techs/ps.png'
import react from '../public/techs/react.png'
import sass from '../public/techs/sass.png'
import tailwind from '../public/techs/tailwind.png'
import ts from '../public/techs/ts.png'
import vercel from '../public/techs/vercel.png'

import {useState} from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Portfolio - Ricardo A.</title>
        <link rel='icon' href='/favicon.png'></link>        
      </Head>

      <main className='bg-gray-200 px-5 pb-16 md:px-20 bg-gradient_bg bg-no-repeat bg-center lg:px-52 dark:bg-neutral-900' >
        <nav className='flex justify-between py-2 my-auto'>
          <div>
            <Image className='filter brightness-15 dark:filter dark:brightness-100' src={logowhite}></Image>
          </div>
          <ul className='flex items-center'>
            <motion.li whileHover={{scale:1.1}} className='text-xl'><BsFillMoonStarsFill className='dark:text-white' onClick={()=> setDarkMode(!darkMode)}/></motion.li>
            <li><a className='bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 ml-6 text-white font-poppins font-semibold border-none rounded-md' href='mailto:contatorisix@gmail.com'>Contact</a></li>
          </ul>
        </nav>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex py-10 items-center gap-5 mx-auto'>
            <div>
              <div className='w-32 h-32 bg-purple-600 rounded-full lg:w-40 lg:h-40'></div>
            </div>
            <div>
              <h1 className='font-poppins font-bold text-xl text-purple-600 lg:text-4xl'>Ricardo Amorim</h1>
              <h2 className='font-inter text-gray-700 lg:text-lg dark:text-neutral-300'>Junior front-end JS Developer.</h2>
              <div className='flex items-center gap-10 mt-3 text-gray-800 dark:text-neutral-200'>
                <motion.a whileHover={{scale:1.1}} href="https://github.com/risixdzn" target='_blank'><FaGithub className='text-xl lg:text-3xl'/></motion.a>
                <motion.a whileHover={{scale:1.1}} href="https://linkedin.com" target='_blank'><FaLinkedin className='text-xl lg:text-3xl'/></motion.a>
                <motion.a whileHover={{scale:1.1}} href="mailto:contatorisix@gmail.com"><FaEnvelope className='text-xl lg:text-3xl'/></motion.a>
              </div>
            </div>
          </div>
          <div className='flex mx-auto flex-col max-w-sm text-justify '>
            <h2 className='font-inter text-gray-900 lg:text-lg dark:text-neutral-400'>I’m a brazilian student, enthusiast in front-end development. Currently seeking for establishing a career in web development.</h2>
            <a className='bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 w-28 text-center mt-3 text-white font-poppins font-semibold border rounded-md border-none' href='#projects'>Projects</a>
          </div>
        </div>
        <h1 className='mt-16 px-3 font-poppins font-bold text-gray-600 text-xl flex items-center gap-2 lg:text-2xl dark:text-white'><GiHamburgerMenu/> Technologies</h1>
        <div className='mt-8 h-auto w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400 px-10 py-10 lg:px-28 dark:bg-gray-200 dark:rounded-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 dark:border dark:border-gray-500 '>
          <div className='mx-auto'>            
            <div className='grid md:grid-cols-2 gap-8'>   
              <div className=' grid grid-cols-3 gap-8 place-items-center'>
                <motion.a whileHover={{scale: 1.1}} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"><SiHtml5 className='text-4xl drop-shadow-lg text-orange-600 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank"><SiCss3 className='text-4xl drop-shadow-lg text-blue-600 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><SiJavascript className='text-4xl drop-shadow-lg text-yellow-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://www.typescriptlang.org" target="_blank"><SiTypescript className='text-4xl drop-shadow-lg text-blue-700 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://reactjs.org" target="_blank"><SiReact className='text-4xl drop-shadow-lg text-cyan-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://nextjs.org" target="_blank"><SiNextdotjs className='text-4xl drop-shadow-lg text-neutral-900 lg:text-5xl dark:text-neutral-300'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://www.figma.com" target="_blank"><SiFigma className='text-4xl drop-shadow-lg text-white lg:text-5xl'/></motion.a>
              </div>
              <div className=' grid grid-cols-3 gap-8 place-items-center'>
                <motion.a whileHover={{scale: 1.1}} href="https://tailwindcss.com" target="_blank"><SiTailwindcss className='text-4xl drop-shadow-lg text-cyan-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://sass-lang.com" target="_blank"><SiSass className='text-4xl drop-shadow-lg text-pink-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://firebase.google.com/" target="_blank"><SiFirebase className='text-4xl drop-shadow-lg text-yellow-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://www.framer.com/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_WW-All-GS-KEY-x-1399-Brand.Bmm-Framer" target="_blank"><SiFramer className='text-4xl drop-shadow-lg text-indigo-500 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://vercel.com" target="_blank"><SiVercel className='text-4xl drop-shadow-lg text-white lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://adobe.com/br/products/photoshop/landpa.html" target="_blank"><SiAdobephotoshop className='text-4xl drop-shadow-lg text-blue-600 lg:text-5xl'/></motion.a>
                <motion.a whileHover={{scale: 1.1}} href="https://adobe.com/br/products/illustrator/" target="_blank"><SiAdobeillustrator className='text-4xl drop-shadow-lg text-orange-600 lg:text-5xl'/></motion.a>
              </div>
            </div>
          </div>          
        </div>
        <h1 className='mt-8 px-3 font-poppins font-bold text-gray-600 text-xl flex items-center gap-2 lg:text-2xl dark:text-white'><BsLightbulbFill/>Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 mt-8' id='#projects'>
          <a href='https://github.com/risixdzn/esfihasdash' target='_blank'> 
            <motion.div whileHover={{y:-4 , transition: { duration: .2 }}}className='basis-1/3 flex-1 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400 dark:bg-gray-200 dark:rounded-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 dark:border dark:border-gray-500 '>
              <div className='flex items-center py-5 px-10 justify-between'>
                <div>
                  <h1 className='text-white font-poppins font-bold text-xl'>EsfihasDash</h1>
                  <h2 className='text-gray-300 font-inter text-base dark:text-gray-400'>Order management react webapp.</h2>
                </div>
                <div>
                  <SiGithub className='text-2xl text-white'/>
                </div>
              </div>
              <div className='w-full h-52 bg-esfihasdash bg-center bg-cover rounded-b-md sm:h-60 lg:h-72'></div>
            </motion.div>
          </a>
          <a href='https://github.com/risixdzn/ricardoamorim' target='_blank' >
            <motion.div whileHover={{y:-4 , transition: { duration: .2 }}} className='basis-1/3 flex-1 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400 dark:bg-gray-200 dark:rounded-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 dark:border dark:border-gray-500'>
              <div className='flex items-center py-5 px-10 justify-between'>
                <div>
                  <h1 className='text-white font-poppins font-bold text-xl'>Portfolio</h1>
                  <h2 className='text-gray-300 font-inter text-base dark:text-gray-400'>Made with Next.js and Tailwind.</h2>
                </div>
                <div>
                  <SiGithub className='text-2xl text-white'/>
                </div>
              </div>
              <div className='w-full h-52 bg-portfolio bg-center bg-cover rounded-b-md sm:h-60 lg:h-72'></div>
            </motion.div> 
          </a>
                   
        </div>       
      </main>      
    </div>
  )
}
