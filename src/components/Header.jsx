// import {useEffect, useRef} from 'react'

import {useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Header = ({time}) => {

    const headerRef= useRef();
    // let date = new Date()
    // date.getFullYear

    useGSAP(() => {
    
        gsap.to(".row1, .row2" , 1, {
            top: 0,
             ease: "power4.out",
             delay:1,
             stagger:{
                amount:0.5,
            },
        });
        // gsap.to(" .row2-col1-rowii" , 1, {
        //     top: 0,
        //      ease: "power4.out",
        //      delay:1.5,
        //      stagger:{
        //         amount:0.5,
        //     },
        // });
        gsap.to(".side-content" , 1, {
            right: 0,
             ease: "power4.out",
             delay:1,
             stagger:{
                amount:0.5,
            },
        });

        gsap.to(".row1-col1, .row1-col2" , 1, {
            left: 0,
             ease: "power4.out",
             delay:2.5,
             stagger:{
                amount:0.5,
            },
        });

        gsap.from(".about h1" , 0.1, {
            opacity: 0,
             ease: "power4.out",
             delay:2,
            
             
        });

        gsap.from(".circle-text" , 2, {
            scale: 0,
             ease: "power4.out",
             delay:2.5,
        });

        gsap.from(".h-stripe" , 1, {
            top: "500%" ,
             ease: "power4.out",
             delay:3,
             
        });

        gsap.from(".diagonal-line" , 1, {
            scaleX: "0" ,
             ease: "power4.out",
             delay:3.5,
             
        });

    });
    // useEffect(() =>{
    //     gsap.to(headerRef, {
    //         left: '0px',
    //         ease: "power4.out",
    //         delay:1,
    //         stagger:{
    //             amount:0.5,
    //         },
    //     });

        
    // }, []);
  return (
    <div className='header flex flex-col h-[100vh] overflow-hidden overflow-y-hidden pin-element pin-container'>

        <div  className='row1 relative -top-full z-[2] flex w-full h-[20%] md:h-[30%] border-b-2 border-[#000] bg-[#b3b0ba]'>
            <div ref={headerRef} className='row1-col1  relative font-Noto overflow-hidden -left-full flex justify-center items-center font-extrabold md:font-bold  basis-[60%] md:basis-[70%] text-[24px] md:text-[55px] lg:text-[70px] xl:text-[90px] text-[#000]'>
                <span className='niche-text  hidden md:flex '>
                    <h1>F</h1>
                    <h1>R</h1>
                    <h1>O</h1>
                    <h1>N</h1>
                    <h1>T</h1>
                    <h1>E</h1>
                    <h1>N</h1>
                    <h1>D</h1>
                </span>

                <span className="hidden md:flex">
                    <strong><h1 className="linee">——</h1></strong>
                </span>

                <span className='dev hidden md:flex'>
                    <h1>D</h1>
                    <h1>E</h1>
                    <h1>V</h1> 
                </span>

                <span className="max-[425px]:text-[28px]  max-[375px]:text-[25px] flex flex-col items-center md:hidden ">
                    <p>FRONTEND</p>
                    <p>——</p>
                    <p>DEV</p>
                </span>
            </div>

            <div className="row1-col2 px-[8px] md:px-[16px] lg:px-5 flex flex-col justify-center  relative overflow-hidden -left-16 basis-[40%] md:basis-[30%] border-l-2 border-[#000] font-bold font-Mont text-[#000]">
                <h3 className="text-[12px] md:text-[16px]">{time.toLocaleDateString('en-US',{weekday:'long', month: 'long', day: 'numeric'})},</h3>
                <h3 className="text-[12px] md:text-[16px]">{time.toLocaleTimeString()}</h3>
                <h3 className="text-[12px] md:text-[16px]">LAGOS, NIGERIA</h3>
                <button type="button"></button>
            </div>
            
        </div>


        <div className='row2 relative -top-full z-0 flex-col md:flex-row flex h-[80%] md:h-[70%]'> 

            <div className="row2-col1 flex-col-reverse flex md:flex-col  md:basis-[70%] h-full">
                <div className="row2-col1-rowi  flex w-full h-[50%] md:h-[60%] lg:h-[55%] border-b-2 border-[#000] ">
                    <div className='pic-row flex  relative overflow-hidden w-full md:w-[65%] lg:w-[70%] border-[#000] border-r-[1px] md:rounded-br-[40px] bg-[#b3b0ba]'>
                        <div className="relative basis-[85%] lg:basis-[75%] overflow-hidden">
                            <div className='flex flex-col gap-2 h-full justify-center max-[320px]:text-[12px] text-[14px] md:text-[12px] lg:text-[16px]  text-[#000]  p-4 tracking-wide description font-Mont'>
                                <p className="">
                                    I am a developer with a primary focus on front-end development based in Lagos,
                                    Nigeria. I am focused and dedicated to developing compelling and interactive user 
                                    interfaces on the web.
                                </p>
                                <p>
                                    I possess a proficiency in developing user-friendly, 
                                    aesthetically pleasing, and functional web products, encompassing a spectrum
                                    from websites to web applications.
                                </p>
                            </div>
                        
                        </div>

                        <div className='h-stripe relative basis-[15%] lg:basis-[10%] bg-[#000]  h-full  p-4 overflow-hidden '>
                            <span className="absolute -right-[11em] /xsml:-right-[8.5em] /-right-[8.5em] md:-right-[9.0em] lg:-right-[10.8em] xl:-right-[9em] h-full -rotate-90 font-bold text-[#fff] font-Noto">FREELANCE {time.getFullYear()}</span>
                        </div>

                        <span className='whitespace basis-[0%] lg:basis-[15%] '></span>
                    </div>

                    <div className='circle-text-container w-[35%] lg:w-[30%] rounded-bl-[40px] border-l-[1px] border-[#000] hidden md:flex justify-center items-center bg-[#b3b0ba]'>
                        <div className='circle-text'>
                            <svg width='250' height='250' className='text'>
                                <path id='curve' d='M 25 125 A 70 70 0 1 1 25 127'></path>
                                <text className='text font-bold font-Mont text-[14px] lg:text-[15px]'>
                                    <textPath href='#curve'>
                                        BARBER BY DAY, FRONTEND DEVELOPER ANYTIME !!!!!!!
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='row2-col1-rowii flex w-full h-[50%] md:h-[40%] lg:h-[45%]'>
                    <div className=" bg-[url('./assets/profile.png')] bg-cover bg-[center_top_40%] w-[60%] md:hidden">
                    
                    </div>

                    <a href="http://" className='about flex items-center justify-center w-[40%] md:w-[65%] lg:w-[70%] lg:p-4 xl:p-20 border-r-[1px] border-[#000] md:rounded-tr-[40px] bg-[#b3b0ba] font-Noto'>
                        <h1 className="text-[25px] max-[320px]:text-[20px] lg:text-[40px] text-[#000] text-center font-extrabold md:font-bold ">LET&apos;S TALK ABOUT
                            <span className="text-[#545454]"> ME</span>
                        </h1>
                    </a>

                    <span className='slant-whitespace hidden md:block relative overflow-hidden w-[35%] lg:w-[30%] border-l-[1px]  rounded-tl-[40px] border-[#000] bg-[#b3b0ba]'>
                        <span className="diagonal-line absolute top-[50%] right-[-25%] w-[150%] transform md:-rotate-[40.5deg] lg:-rotate-[47.5deg] xl:-rotate-[35.5deg] h-[2px]  bg-[#000]"></span>
                    </span>
                </div>
            </div>

            <div className="row2-col2 hidden md:flex basis-[30%]  border-l-2 border-[#000] bg-[#b3b0ba]">
                <div className="md:w-full lg:w-[80%] bg-[url('./assets/profile.png')] bg-cover bg-center">
                    
                </div>

                <div className='side-content md:hidden lg:flex relative -right-full  flex-col overflow-hidden w-[20%]  border-l-2  border-[#000]  bg-[#b3b0ba]'>
                    <span className='project-list h-[55%] border-b-2 border-[#000]'>
                    
                    </span>

                    <span className='empty-whitespace h-[45%]'>
                        
                    </span>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Header