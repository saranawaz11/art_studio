import Image from "next/image";

const Painting1 = () => {
    return (
        <section className="paintings">

            <Image
                src="/Leonardo-da-Vinci-Medium.jpg"
                alt="painting1"
                fill
                className="object-cover"
                priority
            />

            <div>
                <h2>
                    The Last Supper - Leonardo Da Vinci
                </h2>
            </div>

        </section>
    );
};

export default Painting1;
