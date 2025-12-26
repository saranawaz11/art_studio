const Cards = () => {
    return ( 
        <div className="cards h-dvh w-screen">
            <div className="container">
                <img className="card card1" src={'/images/image1.jpg'} alt="imag1" />
                <img className="card card2" src={'/images/image2.jpg'} alt="image2" />
                <img className="card card3" src={'/images/image3.jpg'} alt="image3" />
            </div>
        </div>
     );
}
 
export default Cards;