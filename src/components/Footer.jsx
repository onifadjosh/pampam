// import React from 'react'

const Footer = ({time}) => {
    return (
      <div className="relative h-[35vh] md:h-[40vh] lg:h-[50vh] overflow-hidden pb-5  ">
        
        

        <div className="flex flex-col justify-between h-full px-2 md:px-10 ">
          
          <div className="flex relative flex-col justify-center items-center z-10">
            <p className="max-[320px]:text-[18px] max-[400px]:text-[22px] text-[24px] md:text-[35px] lg:text-[50px] text-center pb-5 md:pb-10 font-Noto">Looking for a Frontend Developer?</p>
    
            <a href="mailto:onifadjosh@gmail.com" className="button text-[16px] max-[320px]:text-[14px] md:text-[18px] z-[10] px-5 py-3 rounded-[30px] border-white border-[1px] font-bold cursor-pointer ">
              <p className="button-content font-Mont">GET IN TOUCH</p>
            </a>
          
          </div>
    
          <div className="absolute top-[5%] lg:top-[10%] xl:top-[-5%] left-[4%] md:left-[5%] opacity-[10%]">
            <h1 className="text-white max-[320px]:text-[75px] max-[400px]:text-[80px] text-[95px] md:text-[170px] lg:text-[220px] xl:text-[300px] font-bold font-Noto">HIRE ME</h1>
          </div>
    
          <div className="flex justify-between font-bold">
            <h3 className="flex gap-[8px] text-[10px] md:text-[16px] lg:text-[24px]">
              <span>LAGOS, NG</span>
              <span>{time.toLocaleTimeString()}</span>
            </h3>
    
            <h3 className="flex gap-[8px] text-[10px] md:text-[16px] lg:text-[24px]">
              <span>ONIFADE JOSHUA </span>
              <span>{time.getFullYear()}</span>
            </h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer