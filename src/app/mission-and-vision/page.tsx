import ImageRevealOverlay from "@/components/ImageRevealOverlay";
import SplitSection from "@/components/SplitSection";
import VideoSection from "@/components/TitleAndVideo";
import Head from "next/head";
import Image from "next/image";

export default function MissionAndVision() {
   return (
      <>
         <Head>
            <title>Mission And Vision | SkyTech Drones</title>
            <meta
               name="description"
               content="Learn more about SkyTech Drones, our mission, and our commitment to aerial innovation."
            />
         </Head>

         <main>
            <section className="relative bg-black">
               <div className="absolute inset-0 overflow-hidden">
                  <Image
                     src="/MissionPageResources/SideSun.jpg"
                     alt=""
                     fill
                     priority
                     className="object-cover object-center opacity-90"
                  />
               </div>
               <div className="relative max-w-7xl mx-auto px-6 py-70 flex flex-col">
                  <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontSize: "60px" }}>Mission</h1>
                  <p className="text-lg text-white/95 drop-shadow max-w-150" style={{ fontSize: "24px" }}>
                     Create forward-pushing drone technology that will revolutionize industries.
                  </p>
               </div>
            </section>

            <SplitSection
               title="Revolutionize the World"
               body="At Driftless Robotics, we harness cutting-edge technology to drive progress and transform industries. Our mission is to create innovative solutions that push the boundaries of what’s possible, empowering people and businesses to achieve new heights. By combining imagination with precision engineering, we are shaping a future where technology expands the limits of human potential and opens doors to extraordinary possibilities."
               imageSrc="/MissionPageResources/Blueprint.jpg"
               imageAlt="Revolutionize the World"
               bgClassName="bg-green-50"
            />

            <div className="block md:hidden">
               <ImageRevealOverlay
                  image="/MissionPageResources/Rocket.jpg"
                  leftTitle="Takeoff To"
                  rightTitle="New Heights"
               />
            </div>

            <div className="hidden md:block">
               <ImageRevealOverlay
                  image="/MissionPageResources/RocketDesktop.jpg"
                  leftTitle="Takeoff To"
                  rightTitle="New Heights"
               />
            </div>

            <div>
               <VideoSection
                  title="See New Perspectives"
                  text="Unlock the power of advanced technology to see the world differently. Our solutions let you capture unique perspectives, opening doors to creativity and innovation."
                  posterSrc="/MissionPageResources/Dronemontage-poster.jpg"
                  videoSrcWebm="/videos/Dronemontage.webm"
               />
            </div>

         </main>
      </>
   );
}
