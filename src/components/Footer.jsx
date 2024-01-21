// import React from 'react'

const Footer = () => {
    return (
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden pb-5  ">
        
        

        <div className="flex flex-col justify-between h-full  px-10 ">
          
          <div className="flex relative flex-col justify-center items-center z-10">
            <p className="text-[35px] lg:text-[50px] text-center pb-10 font-Noto">Looking for a Frontend Developer?</p>
    
            <a href="mailto:onifadjosh@gmail.com" className="button text-[18px] z-[10] px-5 py-3 rounded-[30px] border-white border-[1px] font-bold cursor-pointer ">
              <p className="button-content font-Mont">GET IN TOUCH</p>
            </a>
          
          </div>
    
          <div className="absolute lg:top-[10%] xl:top-[-5%] left-[5%] opacity-[10%]">
            <h1 className="text-white md:text-[170px] lg:text-[220px] xl:text-[300px] font-bold font-Noto">HIRE ME</h1>
          </div>
    
          <div className="flex justify-between font-bold">
            <h3>
              LAGOS, NG
              <span>time</span>
            </h3>
    
            <h3>
              ONIFADE JOSHUA 
              <span>year</span>
            </h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer