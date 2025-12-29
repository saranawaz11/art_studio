import Link from "next/link";
import { allPaintings } from "./(main)/_components/constants";
import About from "./(main)/about/page";
import StickyCards from "./components/StickyCards/StickyCards";
import Cards from "./components/StickyCards/Cards";
import Display from "./components/Display";
import ZoomOutScroll from "./components/ZoomOut";
import HeroSection from "./(main)/main/page";
// import ScrollAnimation from "./components/ScrollAnimations";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="first-section h-screen w-full bg-yellow-50 flex items-center justify-center">
        <a href={`/paintings/${allPaintings[0].slug}`} className="painting-link">
          Paintings
        </a>
      </div>
      <StickyCards />
      <Display />
      <ZoomOutScroll />
      {/* <ScrollAnimation /> */}
      <Cards />

    </div>
  );
}
