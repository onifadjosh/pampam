// import React from 'react'

const Footer = () => {
    return (
      <div className="relative h-[50vh] flex flex-col justify-between overflow-hidden pb-5 px-5">
        <div className="flex relative flex-col justify-center items-center z-10">
          <p className="text-[50px] text-center pb-10">Looking for a Frontend Developer?</p>
  
          <a href="mailto:onifadjosh@gmail.com" className=".btn text-[18px] px-5 py-3 rounded-[30px] border-white border-[1px] font-bold cursor-pointer">GET IN TOUCH</a>
        
        </div>
  
        <div className="absolute top-[-10%] left-[5%] opacity-[10%]">
          <h1 className="text-white text-[300px] font-bold">HIRE ME</h1>
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
    )
  }
  
  export default Footer