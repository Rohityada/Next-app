import Image from 'next/image';
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={{
        src: "/performance.jpg",
        height: 1000, // Adjust these values according to your image's dimensions
        width: 1500,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",
      }}
      imgAlt="welding"
      title="We serve high-performance applications"
    />
  );
}