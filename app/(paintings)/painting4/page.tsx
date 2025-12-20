import Image from "next/image";

const Painting4 = () => {
    return (
        <section className="paintings">

            <Image
                src="/Guernica-Pablo-Picasso-1536x697.jpg.webp"
                alt="painting4"
                fill
                className="object-cover"
                priority
            />

            <div>
                <h2>
                    Guernica, Les Demoiselles d’Avignon - Pablo Picasso

                </h2>
            </div>

        </section>
    );
};

export default Painting4;
