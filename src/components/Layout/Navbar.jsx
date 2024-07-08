import React from 'react'
import Logo from '../../assets/MH-Hotel-Logo.png'
function Navbar() {
    return (
        <div className='my-0 mx-auto screen1390:max-w-screen-xl xl:max-w-screen-screen1200 screen1200:max-w-6xl lg:max-w-4xl md:max-w-4xl lg:px-0 md:px-4 sm:px-[45px] px-[16px]'>
            <nav className='flex justify-start justify-items-center items-center flex-row undefined'>
                <a className='logo__header grow-0 md:mr-[40px] mr-[20px]'>
                    <img alt='MH-Hotel' loading='lazy' decoding='async'
                    className='max-w-min w-[77px] h-[40px] lg:w-[115px] lg:h-[60px] object-cover duration-500 ease-in-out group-hover:opacity-100&quot;
          scale-100 blur-0 grayscale-0)'
          style={{color:'transparent', width: 130, height: 130}} src={Logo}></img>
                </a>
                <div className='hidden screen1200:flex screen1200:grow screen1200:basis-full items-center gap-8 px-5 transition-all duration-300 ease-in-out'>
                    <div className='grow md:flex hidden items-center justify-center'>
                        <div className='hover relative'>
                            <a className='md:block hidden mr-4'>
                                <img></img>
                            </a>
                            <div className='px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300'>
                                <a className='py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group hover:text-orange-500 transition-all duration-300 ease-in-out not-italic'>
                                    Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar