import Image from "next/image";

const Painting3 = () => {
    return (
        <section className="paintings">

            <Image
                src="/Liberty-Leading-the-People-1.jpg.webp"
                alt="painting3"
                fill
                className="object-cover"
                priority
            />

            <div>
                <h2>
                    Liberty Leading the people - Eugene Delacroix
                </h2>
            </div>

        </section>
    );
};

export default Painting3;
