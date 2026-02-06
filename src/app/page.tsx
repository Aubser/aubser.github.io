import ContentBoxes from "@/components/ContentBoxes/contentBoxes";
import homepageImage from "../../public/HomePageResources/GreenPlanetHighQual.jpg"
import FeaturesHorizontalBoxes from "@/components/FeaturesHorizontalBoxes/featuresHorizontalBoxes";
import Image from "next/image";

export default function Home() {
   return (
      <main className="min-h-screen">
         {/* Hero Section */}
         <section className="relative h-[700px] bg-black">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={homepageImage}
                alt=""
                fill
                priority
                className="object-cover object-center opacity-90"
              />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 py-70 flex flex-col items-center text-center">
               <h1 className="text-5xl font-bold text-white mb-10 drop-shadow-lg" style={{ fontSize: "60px" }}>Revolutionize the Sky</h1>
               <p className="text-lg text-white/95 drop-shadow-lg" style={{ fontSize: "24px" }}>
                  Driftless Robotics Drones delivers precision, performance, and reliability.
               </p>
            </div>
         </section>

         {/* Features Section */}
         <FeaturesHorizontalBoxes/>

         {/*SecondSection*/}
         <ContentBoxes/>

         {/* CTA */}
         <section className="text-white py-16 text-center" style={{backgroundColor: '#199a48'}}>
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Mission?</h2>
            <p className="text-lg mb-6">Contact us to learn more about Driftless Robotics!</p>
            <a
               href="/contact"
               className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
            >
               Get in Touch
            </a>
         </section>
      </main>
   );
}
