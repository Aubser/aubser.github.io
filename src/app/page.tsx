// app/page.tsx

export const metadata = {
   title: 'Driftless Robotics Drones | Next-Gen Aerial Solutions',
   description: 'Cutting-edge drones for industry, security, and exploration.',
};

export default function Home() {
   return (
      <main className="min-h-screen">
         {/* Hero Section */}
         <section className="relative bg-black">
            <div className="absolute inset-0 bg-[url('/imageWithoutOrangeLineHorizontal2.png')] bg-cover bg-center opacity-90" />
            <div className="relative max-w-7xl mx-auto px-6 py-60 flex flex-col items-center text-center">
               <h1 className="text-5xl font-bold text-white mb-6">Revolutionize the Sky</h1>
               <p className="text-lg text-white mb-8">
                  Driftless Robotics Drones delivers precision, performance, and reliability for commercial and industrial applications.
               </p>
            </div>
         </section>

         {/* Features Section */}
         <section id="products" className="py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h2 className="text-3xl font-bold mb-12">Why Choose Driftless Robotics?</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow">
                     <img src="/icons/performance.svg" alt="High Performance" className="h-12 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">Superior Performance</h3>
                     <p className="text-blue-400">High-speed, long-range drones engineered for endurance and precision.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow">
                     <img src="/icons/ai.svg" alt="AI-Powered" className="h-12 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">AI-Powered Flight</h3>
                     <p className="text-blue-400">Autonomous navigation and real-time obstacle avoidance with built-in AI.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow">
                     <img src="/icons/support.svg" alt="Support" className="h-12 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                     <p className="text-blue-400">Get expert help anytime with our dedicated support and training programs.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="bg-blue-600 text-white py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Mission?</h2>
            <p className="text-lg mb-6">Contact us to learn more about Driftless Robotics!</p>
            <a
               href="/contact"
               className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
               Get in Touch
            </a>
         </section>
      </main>
   );
}
