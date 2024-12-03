// import React from 'react'
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// const screenWidth = window.screenWidth;
ScrollTrigger.defaults({
    preventOverlaps: true,
    fastScrollEnd: true,
});

const Section = () => {
    const isMobile = window.matchMedia("(max-width: 500px)").matches;

    useGSAP(()=>{
        if (isMobile){
            gsap.to(".project1", {
                x: '60%',
                ease: "slow(0.9,0.1,false)",
                // start:"+600",
                duration:10,
    
                scrollTrigger:{
                    trigger: ".projects",
                    scrub: 0.5,
                    
                },
            });
        } 
        gsap.to(".project1", {
            x: '40%',
            ease: "slow(0.9,0.1,false)",
            // start:"+600",
            duration:10,

            scrollTrigger:{
                trigger: ".projects",
                scrub: 0.5,
                
            },

            
        });
        gsap.from(".border-line1",{
            x:'-100%',
            ease: "slow(0.9,0.1,false)",
            duration: 2,
            scrollTrigger:{
                trigger: ".border-line1",
                
            },
        })
        

        gsap.to(".project2",{
            x: '-60%',
            ease: "slow(0.9,0.1,false)",
            duration:10,

            scrollTrigger:{
                trigger: ".projects",
                scrub: 0.5,
                // markers: true,
            },
        });

        gsap.from(".border-line2",{
            x:'100%',
            ease: "slow(0.9,0.1,false)",
            duration: 2,
            scrollTrigger:{
                trigger: ".border-line2",
                
            },
        })



        gsap.to(".project3",{
            x: '60%',
            ease: "slow(0.9,0.1,false)",
            duration:10,

            scrollTrigger:{
                trigger: ".projects",
                scrub: 0.5,
                // markers: true,
            },
        });

        gsap.from(".border-line3",{
            x:'-100%',
            ease: "slow(0.9,0.1,false)",
            duration: 2,
            scrollTrigger:{
                trigger: ".border-line3",
                
            },
        })

        gsap.to(".project4",{
            x: '-60%',
            ease: "slow(0.9,0.1,false)",
            duration:10,

            scrollTrigger:{
                trigger: ".bolt",
                scrub: 0.5,
                // markers: true,
            },
        });

        gsap.from(".border-line4",{
            x:'100%',
            ease: "slow(0.9,0.1,false)",
            duration: 2,
            scrollTrigger:{
                trigger: ".border-line4",
                
            },
        })

        gsap.to(".project5",{
            x: '60%',
            ease: "slow(0.9,0.1,false)",
            duration:10,

            scrollTrigger:{
                trigger: ".tech-time",
                scrub: 0.5,
                // markers: true,
            },
        });

        gsap.from(".border-line5",{
            x:'-100%',
            ease: "slow(0.9,0.1,false)",
            duration: 2,
            scrollTrigger:{
                trigger: ".border-line5",
                
            },
        })
    });

  return (
    <div className='projects overflow-hidden px-2 md:px-10'>
        <div className='aesthetics relative' id="aesth">
            <span className="flex justify-end relative font-Mont">
                <h3 className="absolute left-[2%] md:left-[15%] lg:left-[30%]">SELECTED PROJECTS</h3>

                <h3 className="">Aesthetics/
                &ldquo;Greensock&ldquo;
                </h3>
            </span>

            
            <a href="https://onifadjosh.github.io/HUMANKIND/" data-letters="HUMANKIND-CLONE WITH GSAP" className='site project1 absolute left-[-20%] md:left-0 font-Noto'>HUMANKIND-CLONE WITH GSAP</a>

            {/* <a href="http://" className="block md:hidden">Visit Site</a> */}
        </div>
        
        <span className="flex justify-center  w-full h-[2px] bg-[#545454] border-line1"></span>

        <div className='harmony relative'>
            <span className="font-Mont">
                <h3>Harmony/ 
                &quot;Vanillas&quot;
                </h3>
            </span>

            <a href="https://onifadjosh.github.io/Crypto-webpage/" data-letters="CRYPTO WEBPAGE WITH VANILLAS" className='site project2 absolute left-[60%] font-Noto'> CRYPTO WEBPAGE WITH VANILLAS </a>

            {/* <a href="http://" className="block md:hidden">Visit Site</a> */}
        </div>

        <span className="flex justify-center  w-full h-[2px] bg-[#545454] border-line2"></span>

        <div className='aesthetics relative'>
            <span className="font-Mont">
                <h3>Aesthetics/ 
                &quot;Vanillas&quot;
                </h3>
            </span>

            <a href="https://onifadjosh.github.io/REBOUND/" data-letters="REBOUND-A WINE BOTTLE STORE CLONE" className='site project3 absolute left-[-50%] font-Noto'>REBOUND-A WINE BOTTLE STORE CLONE</a>

            {/* <a href="http://" className="block md:hidden">Visit Site</a> */}
        </div>

        <span className="flex justify-center  w-full h-[2px] bg-[#545454] border-line3"></span>

        <div className='harmony bolt relative'> 
            <span className="font-Mont">
                <h3>Harmony/ 
                &ldquo;Greensock&ldquo;
                </h3>
            </span>

            <a href="https://onifadjosh.github.io/BOLT/" data-letters="BOLT - SHOPIFY MARKETPLACE" className='site project4 absolute left-[50%] font-Noto'>BOLT - SHOPIFY MARKETPLACE</a>

            {/* <a href="http://" className="block md:hidden">Visit Site</a> */}
        </div>

        <span className="flex justify-center  w-full h-[2px] bg-[#545454] border-line4"></span>

        <div className='harmony tech-time relative'>
            <span className="font-Mont">
                <h3>Harmony/ 
                &quot;Vanillas&quot;
                </h3>
            </span>

            <a href="https://onifadjosh.github.io/TECHTIME/" data-letters="TECHTIME - LEARN TECH ONLINE" className='site project5 absolute left-[-50%] font-Noto'>TECHTIME - LEARN TECH ONLINE</a>

            {/* <a href="http://" className="block md:hidden">Visit Site</a> */}
        </div>

        <span className="flex justify-center  w-full h-[2px] bg-[#545454] border-line5"></span>

    </div>
  )
}

export default Section