import Link from "next/link";
import { allPaintings } from "./(main)/_components/constants";
import About from "./(main)/about/page";
import StickyCards from "./components/StickyCards/StickyCards";


export default function Home() {
  return (
    <div className="">
      <div className="first-section h-screen w-full bg-yellow-50 flex items-center justify-center">
        <a href={`/paintings/${allPaintings[0].slug}`} className="painting-link">
          Paintings
        </a>
      </div>
      <About />
      <StickyCards />
    </div>
  );
}
