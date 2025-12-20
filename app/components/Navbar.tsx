import Link from "next/link";

const Navbar = () => {
    return ( 
<div className="nav">
            <ul>
                <li>
                    <Link href="/">Leonardo Da Vinci</Link>
                </li>
                <li>
                    <Link href="/painting2">Anders Zorn</Link>
                </li>
                <li>
                    <Link href="/painting3">Eugene Delacroix</Link>
                </li>
                <li>
                    <Link href="/painting4">Pablo Picasso</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;