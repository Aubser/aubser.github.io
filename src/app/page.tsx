import ContentBoxes from "@/components/contentBoxes";
import homepageImage from "../../public/imageWithoutOrangeLinehorizontal2.png"
import FeaturesHorizontalBoxes from "@/components/featuresHorizontalBoxes";

export default function Home() {
   return (
      <main className="min-h-screen">
         {/* Hero Section */}
         <section className="relative bg-black">
            <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: `url(${homepageImage.src})`}}/>
            <div className="relative max-w-7xl mx-auto px-6 py-70 flex flex-col items-center text-center">
               <h1 className="text-5xl font-bold text-white mb-6">Revolutionize the Sky</h1>
               <p className="text-lg text-white mb-8">
                  Driftless Robotics Drones delivers precision, performance, and reliability for commercial and industrial applications.
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
