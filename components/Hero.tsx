import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { WobbleCard } from "./ui/wobble-card";
import { HeroPage } from "@/data";


export interface HeroProps {
  cover: {
    title1: string,
    title2?:string
    image: string,
    description: string,
    Button: {
      title: string,
      onClick: () => void
    }

  },
  Card1: {
    title: string,
    image: string,

    Button: {
     
      onClick: () => void
    }

  },
  Card2: {
    title: string,
    image: string,

    Button: {
    
      onClick: () => void
    }

  },
  Card3: {
    title: string,
    image: string,

    Button: {
     
      onClick: () => void
    }

  }
}

const Hero = () => {
  return <main className="px-0 container pt-24 pb-16">

    <div className=" lg:flex w-screen gap-6">

      <div style={{
        backgroundImage:`url(${HeroPage.cover.image})`
      }} className="relative left-0 lg:w-9/12 mr-0   test  bg-cover overflow-hidden h-[680px]">

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90">
          <div className="absolute lg:left-28 bottom-0 p-8 space-y-6 ">
            <h1 className="text-4xl  font-bold text-white leading-tight text-pretty">
             
              {HeroPage.cover.title1} <br /> {HeroPage.cover.title2}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
            {HeroPage.cover.description}
            </p>
            <Button onClick={HeroPage.cover.Button.onClick} className="bg-[#E5D28D] rounded-2xl text-black hover:bg-[#D4C27C] px-8">
              {HeroPage.cover.Button.title} 
            </Button>
          </div>
        </div>

      </div>


      <div className=" lg:block  flex w-full h-60 justify-start gap-3 lg:overflow-visible no-scrollbar overflow-x-scroll  align-middle  lg:space-y-14 lg:w-3/12">

<WobbleCard containerClassName=" bg-black relative w-3/4 lg:w-full flex-shrink-0 hover:cursor-pointer lg:right-24 overflow-hidden rounded-2xl group h-[180px]">

          <Image
            alt={HeroPage.Card1.title}
            className="object-cover"
            src={HeroPage.Card1.image}
            layout="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-4">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-medium text-white">{HeroPage.Card1.title}</h3>
              <div className="h-8 w-8 text-center group-hover:bg-transparent  flex align-middle items-center justify-center bg-white rounded-full">
                <ArrowRight className="h-5 w-5 text-black group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
    
</WobbleCard>
       





        <WobbleCard containerClassName="bg-black relative lg:right-10 flex-shrink-0 hover:cursor-pointer  w-3/4 overflow-hidden rounded-2xl group h-[180px]">
          <Image
            alt={HeroPage.Card2.title}
            className="object-cover"
            src={HeroPage.Card2.image}
            layout="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-4">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-medium text-white">{HeroPage.Card2.title}</h3>
              <div className="h-8 w-8 text-center group-hover:bg-transparent  flex align-middle items-center justify-center bg-white rounded-full">
                <ArrowRight className="h-5 w-5 text-black group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </WobbleCard>




        <WobbleCard containerClassName="bg-black relative w-3/4 lg:w-full flex-shrink-0 hover:cursor-pointer lg:right-24 overflow-hidden rounded-2xl group h-[180px]">
          <Image
            alt={HeroPage.Card3.title}
            className="object-cover"
            src={HeroPage.Card3.image}
            layout="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex items-end p-4">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-medium text-white">{HeroPage.Card3.title}</h3>
              <div className="h-8 w-8 text-center group-hover:bg-transparent  flex align-middle items-center justify-center bg-white rounded-full">
                <ArrowRight className="h-5 w-5 text-black group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </WobbleCard>



      </div>





    </div>
    <div className=" hidden lg:flex relative bottom-16 left-6 w-14 h-14 rounded-full  bg-white  justify-center items-center">

      <ArrowDown className="text-black w-7 h-7" />

    </div>
  </main>
}
export default Hero;
