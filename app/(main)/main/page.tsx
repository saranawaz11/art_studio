const HeroSection = () => {
    return ( 
        <section className="hero-container">
            <div className="text-content">
                <h1>Arcline Studio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur corporis exercitationem eveniet perspiciatis nobis sed, repudiandae cum suscipit reiciendis!</p>
                <a href="#">Explore <span>paintings</span></a>
            </div>
            <div className="imgs">
                <div className="img img1">
                    <img src="/images/Leonardo-da-Vinci-Medium.jpg" alt="img1" />
                </div>
                <div className="img img2">
                    <img src="/images/Guernica-Pablo-Picasso-1536x697.jpg.webp" alt="img2" />
                </div>
                <div className="img img3">
                    <img src="/images/Liberty-Leading-the-People-1.jpg.webp" alt="img3" />
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;