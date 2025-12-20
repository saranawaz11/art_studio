import Image from "next/image";

const Painting2 = () => {
    return (
        <section className="paintings">

            <Image
                src="/Our-daily-bread-Anders-Zorn-1886-.jpg"
                alt="painting2"
                fill
                className="object-cover"
                priority
            />

            <div>
                <h2>
                    Our Daily Bread – Anders Zorn
                </h2>
            </div>

        </section>
    );
};

export default Painting2;
