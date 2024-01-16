// import React from 'react'
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {

    useGSAP(()=>{
        gsap.to("#smooth-wrapper", {
            x: '40%',
            ease: "slow(0.9,0.1,false)",
            // start:"+600",
            duration:10,

            scrollTrigger:{
                trigger: ".projects",
                scrub: 0.5,
                
            },
            
            
        });
        

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
    });

  return (
    <div className='projects overflow-hidden'>
        <div className='aesthetics ' id="aesth">
            <span className="flex justify-end relative">
                <h3 className="absolute left-[30%]">SELECTED PROJECTS</h3>

                <h3>Aesthetics/<br />
                &ldquo;Greensock&ldquo;
                </h3>
            </span>

           <div id="smooth-wrapper">
                <div id="smooth-content">
                    <h1 data-letters="HUMANKIND-CLONE WITH GSAP" className='site project1 relative left-0 //hover:text-[#133020] //hover:text-[#def54f]'>HUMANKIND-CLONE WITH GSAP</h1>
                </div>
           </div>
        </div>

        <div className='harmony'>
            <span>
                <h3>Harmony/ <br />
                &quot;Vanillas&quot;
                </h3>
            </span>

            <h1 data-letters="CRYPTO WEBPAGE WITH VANILLAS" className='site project2 relative left-[60%]'> CRYPTO WEBPAGE WITH VANILLAS </h1>
        </div>

        <div className='aesthetics'>
            <span>
                <h3>Aesthetics/ <br />
                &quot;Vanillas&quot;
                </h3>
            </span>

            <h1 data-letters="REBOUND-A WINE BOTTLE STORE CLONE" className='site project3 relative left-[-50%]'>REBOUND-A WINE BOTTLE STORE CLONE</h1>
        </div>

        <div className='harmony bolt'> 
            <span>
                <h3>Harmony/ <br />
                &ldquo;Greensock&ldquo;
                </h3>
            </span>

            <h1 data-letters="BOLT - SHOPIFY MARKETPLACE" className='site project4 relative left-[50%]'>BOLT - SHOPIFY MARKETPLACE</h1>
        </div>

        <div className='harmony tech-time'>
            <span>
                <h3>Harmony/ <br />
                &quot;Vanillas&quot;
                </h3>
            </span>

            <h1 data-letters="TECHTIME - LEARN TECH ONLINE" className='site project5 relative left-[-50%]'>TECHTIME - LEARN TECH ONLINE</h1>
        </div>

    </div>
  )
}

export default Section