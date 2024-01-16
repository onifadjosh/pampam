// import {useEffect, useRef} from 'react'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Header = () => {

    const headerRef= useRef();

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
    <div className='header flex flex-col h-[100vh] overflow-hidden overflow-y-hidden'>

        <div  className='row1 relative -top-full z-[2] flex w-full h-[30%] border-b-2 border-[#000] bg-[#b3b0ba]'>
            <div ref={headerRef} className='row1-col1 relative overflow-hidden -left-full flex justify-center items-center font-bold  basis-[70%] text-[90px] text-[#000]'>
                <span className='niche-text  flex '>
                    <h1>F</h1>
                    <h1>R</h1>
                    <h1>O</h1>
                    <h1>N</h1>
                    <h1>T</h1>
                    <h1>E</h1>
                    <h1>N</h1>
                    <h1>D</h1>
                </span>

                <span>
                    <strong><h1 className="linee">——</h1></strong>
                </span>

                <span className='dev flex'>
                    <h1>D</h1>
                    <h1>E</h1>
                    <h1>V</h1> 
                </span>
            </div>

            <div className="row1-col2 px-20 flex flex-col justify-center  relative overflow-hidden -left-16 basis-[30%] border-l-2 border-[#000] font-bold text-[#000]">
                <h3>DAY</h3>
                <h3>TIME</h3>
                <h3>ADDRESS</h3>
            </div>
            
        </div>


        <div className='row2 relative -top-full z-0 flex h-[70%]'> 

            <div className="row2-col1  flex flex-col basis-[70%] h-full">
                <div className="row2-col1-rowi  flex w-full h-[55%] border-b-2 border-[#000] ">
                    <div className='pic-row flex  relative overflow-hidden w-[70%] border-[#000] border-r-[1px] rounded-br-[40px] bg-[#b3b0ba]'>
                        <div className="relative basis-[70%] overflow-hidden">
                            <div className='text-reveal   text-[#000] font-bold'>
                                I am a developer with a primary focus on front-end development based in Lagos,
                                Nigeria focused and dedicated to developing compelling and interactive digital 
                                experiences on the web.I possess a proficiency in developing user-friendly, 
                                aesthetically pleasing, and functional web products, encompassing a spectrum
                                from websites to web applications.
                            </div>
                        
                        </div>

                        <div className='h-stripe relative  basis-[10%] bg-[#000]  h-full  p-4 overflow-hidden '>
                            <span className="absolute -right-[9em] h-full -rotate-90 font-bold text-[#fff]">FREELANCE 2024</span>
                        </div>

                        <span className='whitespace basis-[20%]'></span>
                    </div>

                    <div className='circle-text-container w-[30%] rounded-bl-[40px] border-l-[1px] border-[#000] flex justify-center items-center bg-[#b3b0ba]'>
                        <div className='circle-text'>
                            <svg width='250' height='250' className='text'>
                                <path id='curve' d='M 25 125 A 70 70 0 1 1 25 127'></path>
                                <text className='text font-bold'>
                                    <textPath href='#curve'>
                                        BARBER BY DAY, FRONTEND DEVELOPER ANYTIME !!!!!!!
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='row2-col1-rowii flex w-full h-[45%]'>
                    <a href="http://" className='about flex items-center w-[70%] p-20 border-r-[1px] border-[#000] rounded-tr-[40px] bg-[#b3b0ba]'>
                        <h1 className="text-[40px] text-center font-bold">LET&apos;S TALK ABOUT
                        <span className="text-[#000]"> ME</span>
                        </h1>
                    </a>

                    <span className='slant-whitespace  relative overflow-hidden w-[30%] border-l-[1px]  rounded-tl-[40px] border-[#000] bg-[#b3b0ba]'>
                        <span className="diagonal-line absolute top-[50%] right-[-25%] w-[150%] transform -rotate-[35deg] h-[2px]  bg-[#000]"></span>
                    </span>
                </div>
            </div>

            <div className="row2-col2 flex basis-[30%]  border-l-2 border-[#000] bg-[#b3b0ba]">
                <div className="w-[80%] bg-[url('./assets/profile.png')] bg-cover bg-center">
                    
                </div>

                <div className='side-content relative -right-full flex flex-col overflow-hidden w-[20%]  border-l-2  border-[#000]  bg-[#b3b0ba]'>
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