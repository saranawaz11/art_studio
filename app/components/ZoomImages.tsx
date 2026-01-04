import Image from "next/image";
import { IMAGES_CONFIG } from "../(main)/_components/constants";

const ZoomImages = () => {
    return ( 
        <section className="relative h-[400vh] bg-pink-300 mb-10">

            <div className="relative h-screen w-screen will-change-transform">
                <div className="top absolute bottom-full h-screen w-screen bg-green-200 flex gap-2">
                    {IMAGES_CONFIG.top.map((img, ind) => 
                    (
                        <div key={ind}>
                            <Image src={img.src} alt='image' width={400} height={400}/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
     );
}
 
export default ZoomImages;