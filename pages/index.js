import Head from 'next/head'
import Image from 'next/image'

import logowhite from '../public/logowhite.png'

import {BsFillMoonStarsFill,} from 'react-icons/bs'
import { FaGithub , FaLinkedin , FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricardo Amorim Portfolio</title>
        <link rel='icon' href='/favicon.png'></link>
        
      </Head>

      <main className='bg-gray-200 px-5 md:px-20 lg:px-40 '>
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
          <div className='flex py-10 items-center gap-10 mx-auto'>
            <div>
              <div className='w-32 h-32 bg-purple-600 rounded-full'></div>
            </div>
            <div>
              <h1 className='font-poppins font-bold text-2xl text-purple-600'>Ricardo Amorim</h1>
              <h2 className='font-inter text-gray-700'>Front-end junior JS Developer.</h2>
              <div className='flex items-center gap-10 text-3xl mt-3 text-gray-800'>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaLinkedin/></a>
                <a f href="#"><FaEnvelope/></a>
              </div>
            </div>
          </div>
          <div className='flex mx-auto flex-col max-w-sm text-justify '>
            <h2 className='font-inter text-gray-700'>I’m a brazilian student, enthusiast in front-end development. Currently seeking for establishing a carreer in web development.</h2>
            <a className='bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 w-28 text-center mt-3 text-white font-poppins font-semibold border rounded-md' href='#'>Contact</a>
          </div>
        </div>
      </main>
    </div>
  )
}
