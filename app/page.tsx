import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import ShowLove from "@/app/components/ShowLove"
import About from "@/app/components/About";
import Project from "@/app/components/Project";


export default function Home() { 
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ShowLove />
      <About />
      <Project />
      
    </>
  );
}
