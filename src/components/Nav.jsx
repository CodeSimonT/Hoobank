import {logo,menu,close} from '../assets'
import styles from '../style'
import {navLinks} from '../constants'
import { useState } from 'react'

function Nav() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex flex-row justify-between 
    items-center w-full py-6 relative'>
      <img src={logo} alt="hoobank" 
      className='w-[120px] h-[32px] object-contain '/>
      <ul className='flex-row md:flex hidden '>
        {navLinks.map((nav,index) => (
          <li 
          key={nav.id}
          className={`font-poppins font-normal text-[16px]
          text-white ${index !== navLinks.length - 1 ?
          'mr-10' : 'mr-0'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex-1 md:hidden flex justify-end
      items-center '>
        <img src={toggle ? close : menu} alt="menu"
        className='w-[23px] h-[23px] object-contain cursor-pointer' 
        onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} py-6 
        min-w-[140px] bg-black-gradient absolute top-24 right-0
        sidebar rounded-xl`}>
        <ul className='list-none w-full flex flex-col items-center'>
          {navLinks.map((nav,index) => (
            <li 
            key={nav.id}
            className={`font-poppins font-normal text-[16px]
            text-white ${index !== navLinks.length - 1 ?
            'mb-2' : 'mb-0'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav