import StickyCards from "./components/StickyCards/StickyCards";
import Cards from "./components/StickyCards/Cards";
import Display from "./components/Display";
import Landingpage from "./(main)/LandingPage/page";


export default function Home() {
  return (
    <div className="">
      <Landingpage />
      <StickyCards />
      <Display />
      <Cards />
    </div>
  );
}
