"use client";
import Hero from "@/components/Hero";
import { FooterWithSocialLinks } from "@/components/Footer";
import Approach from "@/components/Approach";
import dynamic from "next/dynamic";
import { PreviewGradient } from "@/components/pricingSectionone";
import { CoverDemo } from "@/components/text-warp";

const Grid = dynamic(
  () => import('../components/Grid'),
  { ssr: false }
);


const RecentProjects = dynamic(
  () => import('../components/RecentProjects'),
  { ssr: false }
);


const Home = () => {
  return (
    <>
      <main className=" bg-black-100 flex   overflow-hidden  justify-center w-screen items-center flex-col  mx-auto sm:px-10 px-5">
        <div>
          <Hero />
        </div>
        <div className="w-screen px-7">



          <CoverDemo />

          <RecentProjects />

          <PreviewGradient />
          <Grid />

          <Approach />






        </div>

      </main>
      <FooterWithSocialLinks />
    </>


  );
};

export default Home;
