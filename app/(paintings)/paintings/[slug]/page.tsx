'use client'

import { allPaintings } from "@/app/(main)/_components/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function PaintingPage() {
  const { slug } = useParams();

  const painting = allPaintings.find(p => p.slug === slug);
  if (!painting) return null;

  return (
    <section className="paintings relative h-screen">
      <Image
        src={painting.img_src}
        alt={painting.title}
        fill
        className="object-cover"
        priority
      />

      <div>
        <h2>
        {painting.title}
      </h2>
      </div>
    </section>
  );
}
