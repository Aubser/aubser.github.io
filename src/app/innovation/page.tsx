import SplitSection from "../../components/SplitSection";
import Carousel from "../../components/Carousel";
import Head from "next/head";
import Image from "next/image";

const images = [
   { src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80", alt: "Drone 1" },
   { src: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80", alt: "Drone 2" },
   { src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80", alt: "Drone 3" },
   { src: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=800&q=80", alt: "Drone 4" },
   { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80", alt: "Drone 5" },
];

export default function Drones() {
   return (
      <>
         <Head>
            <title>Drones | Driftless Robotics</title>
            <meta
               name="description"
               content="Learn more about Driftless Robotics, our mission, and our commitment to aerial innovation."
            />
         </Head>

         <main>
            <section className="relative bg-black z-10 min-h-[85vh] flex items-end">
               <div className="absolute inset-0 overflow-hidden">
                  <Image
                     src="/InnovationPageResources/AerialViewofBigBerthaShifted.png"
                     alt=""
                     fill
                     priority
                     className="object-cover object-center opacity-90"
                  />
               </div>
               <div className="relative max-w-8xl mx-auto flex flex-col items-center text-center justify-end text-white">
                  <div className="bg-gray-800/90 px-6 py-2 rounded-lg">
                     <h1 className="text-5xl font-bold mb-2" style={{ fontSize: "48px" }}>Innovation</h1>
                     <p className="text-lg" style={{ fontSize: "22px" }}>
                        Precision engineered. Purposefully built. Pushing the boundaries of what's possible, one flight at a time.
                     </p>
                  </div>
               </div>
            </section>

            <div className="relative z-10">
               <SplitSection
                  title="Novel Designs"
                  body="We don't follow templates — we build from vision. Each drone is crafted from the ground up, engineered to solve real problems with bold, unconventional solutions. Our designs challenge industry norms and set new standards for what a drone can be."
                  imageSrc="/InnovationPageResources/Placeholder.jpg"
                  imageAlt="Novel Designs"
                  bgClassName="bg-gray-200"
                  darkMode="dark:bg-gray-800"
               />
            </div>

            <div className="flex justify-center items-center">
               <Carousel
                  title="Hours in the Making"
                  subtitle="Great drones aren't built overnight. They're the result of countless hours of designing, testing, and refining — late nights, early mornings, and an unwavering commitment to getting it right."
                  images={images}
               />
            </div>

            <div className="relative z-10">
               <SplitSection
                  title="Perseverance through Challenges"
                  body="Building the future isn't easy — and we wouldn't have it any other way. Every obstacle we face is an opportunity to refine, rebuild, and come back stronger. From failed prototypes to breakthrough moments, our commitment to the craft never wavers. The path forward is rarely straight, but we keep flying."
                  imageSrc="/InnovationPageResources/BustedDrone.jpg"
                  imageAlt="Perseverance through Challenges"
                  bgClassName="bg-green-100"
                  darkMode="dark:bg-green-900"
               />
            </div>

         </main>
      </>
   );
}
