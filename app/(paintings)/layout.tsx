import React from "react";
import Navbar from "../(main)/_components/Navbar";

type PaintingsProps = {
    children: React.ReactNode
}
const PaintingsLayout = ({children}: PaintingsProps) => {
    return ( 
        <div>
            <Navbar/>
            {children}
        </div>
     );
}
 
export default PaintingsLayout;