import Head from 'next/head'
import Image from 'next/image'

import logowhite from '../public/logowhite.png'
import gradient from '../public/gradient.png'

import {BsFillMoonStarsFill,} from 'react-icons/bs'
import { FaGithub , FaLinkedin , FaEnvelope } from "react-icons/fa";
import { SiAdobeillustrator, SiCss3, SiFigma, SiFirebase, SiFramer, SiHtml5, SiJavascript, SiNextdotjs, SiAdobephotoshop, SiReact, SiSass, SiTailwindcss, SiTypescript, SiVercel, SiJava } from "react-icons/si";
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - Ricardo A.</title>
        <link rel='icon' href='/favicon.png'></link>        
      </Head>

      <main className='bg-gray-200 px-5 md:px-20 bg-gradient_bg bg-no-repeat bg-center' >
        <nav className='flex justify-between py-2 my-auto'>
          <div>
            <Image className='filter brightness-15' src={logowhite}></Image>
          </div>
          <ul className='flex items-center'>
            <li className='text-xl'><BsFillMoonStarsFill/></li>
            <li><a className='bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 ml-6 text-white font-poppins font-semibold border rounded-md' href='#'>Contact</a></li>
          </ul>
        </nav>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex py-10 items-center gap-5 mx-auto'>
            <div>
              <div className='w-32 h-32 bg-purple-600 rounded-full lg:w-40 lg:h-40'></div>
            </div>
            <div>
              <h1 className='font-poppins font-bold text-xl text-purple-600 lg:text-4xl'>Ricardo Amorim</h1>
              <h2 className='font-inter text-gray-700 lg:text-lg'>Junior front-end JS Developer.</h2>
              <div className='flex items-center gap-10 mt-3 text-gray-800'>
                <a href="#"><FaGithub className='text-xl lg:text-3xl'/></a>
                <a href="#"><FaLinkedin className='text-xl lg:text-3xl'/></a>
                <a href="#"><FaEnvelope className='text-xl lg:text-3xl'/></a>
              </div>
            </div>
          </div>
          <div className='flex mx-auto flex-col max-w-sm text-justify '>
            <h2 className='font-inter text-gray-900 lg:text-lg'>I’m a brazilian student, enthusiast in front-end development. Currently seeking for establishing a career in web development.</h2>
            <a className='bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 w-28 text-center mt-3 text-white font-poppins font-semibold border rounded-md border-none' href='#'>Projects</a>
          </div>
        </div>
        <div className='mt-16 h-auto w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-400 px-10 py-10 lg:px-28'>
          <div className='mx-auto'>
            <h1 className='font-poppins font-bold text-white text-xl flex items-center gap-2'><GiHamburgerMenu/> Technologies</h1>
            <div className='grid md:grid-cols-2 gap-8'>   
              <div className='mt-10 grid grid-cols-3 gap-8 place-items-center'>
                <SiHtml5 className='text-4xl drop-shadow-lg text-orange-600'/>
                <SiCss3 className='text-4xl drop-shadow-lg text-blue-600'/>
                <SiJavascript className='text-4xl drop-shadow-lg text-yellow-500'/>
                <SiTypescript className='text-4xl drop-shadow-lg text-blue-700'/>
                <SiReact className='text-4xl drop-shadow-lg text-cyan-500'/>
                <SiNextdotjs className='text-4xl drop-shadow-lg text-gray-900'/>
                <SiFigma className='text-4xl drop-shadow-lg text-white'/>
              </div>
              <div className='mt-10 grid grid-cols-3 gap-8 place-items-center'>
                <SiTailwindcss className='text-4xl drop-shadow-lg text-cyan-500'/>
                <SiSass className='text-4xl drop-shadow-lg text-pink-500'/>
                <SiFirebase className='text-4xl drop-shadow-lg text-yellow-500'/>
                <SiFramer className='text-4xl drop-shadow-lg text-indigo-500'/>
                <SiVercel className='text-4xl drop-shadow-lg text-white'/>
                <SiAdobephotoshop className='text-4xl drop-shadow-lg text-blue-600'/>
                <SiAdobeillustrator className='text-4xl drop-shadow-lg text-orange-600'/>
              </div>
            </div>
          </div>          
        </div>       
      </main>
      
    </div>
  )
}
