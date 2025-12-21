import { Link } from "next-transition-router";
import { allPaintings } from "@/app/(main)/_components/constants";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link href={'/'} className="link">Home</Link>
            {allPaintings.map((painting) => (
                <Link
                    className="link"
                    key={painting.id}
                    href={`/paintings/${painting.slug}`}
                >
                    {painting.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
