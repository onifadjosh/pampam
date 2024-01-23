// import React from 'react'

const Community = () => {
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center ">

            <div className="flex flex-col justify-center items-center">
                <h3 className='community-head font-semibold lg:font-medium md:text-[20px] lg:text-[18px] pb-6 font-Noto'>COMMUNITY CONTRIBUTIONS</h3>
                <p className='community-content w-[90%] md:w-[75%] xl:w-[50%] text-center font-medium lg:font-semibold md:text-[20px] lg:text-[20px] font-Mont'>
                    I have actively contributed to the development of various 
                    resources and tools, primarily tailored for designers and 
                    developers, aligning with my professional background and expertise.
                    You can check out <a href="https://onifadjosh.github.io/Tribute-to-the-queen/" className="font-bold md:text-[20px] lg:text-[24px] hover:text-[#E6FF00] font-Noto">QUEEN ELIZABETH</a>
                </p>
            </div>
  
            {/* <span className="flex justify-center  w-full h-[2px] bg-[#545454] "></span>  */}
            {/* <span className="mb-5">
                <p className="text-center text-[18px] font-medium ">
                    Do you have a question, a proposal, or a project you&apos;d like to collaborate on? <br/>
                    Feel free to drop me a message!
                </p>
            </span> */}
        </div>
    )
  }
  
  export default Community