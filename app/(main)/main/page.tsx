const HeroSection = () => {
    return ( 
        // <section className="hero-container">
        //     <div className="loader">
        //         <h1>Arcline</h1>
        //         <h2>Studio</h2>
        //     </div>

        //     <div className="wrapper">
        //         <div className="text-content">
        //         <h1>Arcline Studio</h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur corporis exercitationem eveniet perspiciatis nobis sed, repudiandae cum suscipit reiciendis!</p>
        //         <a href="#">Explore <span>paintings</span></a>
        //     </div>
        //     <div className="imgs">
        //         <div className="img img1">
        //             <img src="/images/Leonardo-da-Vinci-Medium.jpg" alt="img1" />
        //                 <div className="bg"></div>
        //         </div>
        //         <div className="img img2">
        //             <img src="/images/Guernica-Pablo-Picasso-1536x697.jpg.webp" alt="img2" />
        //                 <div className="bg"></div>
        //         </div>
        //         <div className="img img3">
        //             <img src="/images/Liberty-Leading-the-People-1.jpg.webp" alt="img3" />
        //                 <div className="bg"></div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="hero-container">
            <div className="loader">
                <h1>MODELING</h1>
                <h2>PAGE</h2>
            </div>

            <div className="wrapper">
                <div className="content">
                    <div className="h1">
                        <h1>MODELING</h1>
                    </div>
                    <div className="h1">
                        <h1>AGENCY</h1>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem repellendus
                        veniam Vero adipisci nobis fuga architecto Aspernatur aliquam provident ab. Nemo quo, sequi
                        dignissimos minima distinctio odio est dolorem</p>
                    <a href="#">Explore now</a>

            </div>

                <div className="img">
                    <div className="subimg one">
                    <img src="/images/Leonardo-da-Vinci-Medium.jpg" alt="img1" />
                        <div className="bg"></div>
                </div>
                    <div className="subimg two">
                    <img src="/images/Guernica-Pablo-Picasso-1536x697.jpg.webp" alt="img2" />
                        <div className="bg2"></div>

                </div>
                    <div className="subimg three">
                    <img src="/images/Liberty-Leading-the-People-1.jpg.webp" alt="img3" />
                        <div className="bg3"></div>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;