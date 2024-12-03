import Header from "./components/Header";
import Section from "./components/Section";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { useEffect, useState } from "react";
function App() {
  const [time, setTime] = useState(new Date())

    useEffect(()=>{
      const timer=  setInterval(() => {
            setTime(new Date())
        }, 1000);

      return()=>  clearInterval(timer)
    },[])

    

  return (
    <>
      <Header time={time}/>
      <Section/>
      <Community></Community>
      <Marquee></Marquee>      
      <Footer time={time}></Footer>
    </>
  )
}

export default App
