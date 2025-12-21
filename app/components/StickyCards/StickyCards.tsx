'use client'
import { stickyCardsData } from "@/app/(main)/_components/constants";
import Image from "next/image";

const StickyCards = () => {
    return (
        <div className='sticky-cards'>
            {stickyCardsData.map((cardData, index) => (
                <div className="sticky-card" key={index}>
                    <div className="sticky-card-index">
                        <h1>{cardData.index}</h1>
                    </div>
                    <div className="sticky-card-content">
                        <div className="sticky-card-content-wrapper">
                            <h1 className="sticky-card-header">{cardData.name}</h1>
                            <div className="sticky-card-img">
                                <Image
                                    src={cardData.img_src}
                                    alt={cardData.name}
                                    fill
                                    className="img"
                                    priority
                                />
                            </div>
                            <div className="sticky-card-copy">
                                <div className="sticky-card-copy-title">
                                    <p>(About the painting)</p>
                                </div>
                                <div className="sticky-card-copy-description">
                                    <p>{cardData.descrption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StickyCards;