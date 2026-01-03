import Link from "next/link";
import { allPaintings } from "./(main)/_components/constants";
import About from "./(main)/about/page";
import StickyCards from "./components/StickyCards/StickyCards";
import Cards from "./components/StickyCards/Cards";
import Display from "./components/Display";
import ZoomOutScroll from "./components/ZoomOut";
import HeroSection from "./(main)/main/page";
import Landingpage from "./(main)/LandingPage/page";
// import ScrollAnimation from "./components/ScrollAnimations";


export default function Home() {
  return (
    <div className="">
      <Landingpage />
      {/* <HeroSection /> */}
      {/* <StickyCards /> */}
      {/* <Display /> */}
      {/* <ZoomOutScroll /> */}
      {/* <ScrollAnimation /> */}
      {/* <Cards /> */}

    </div>
  );
}
