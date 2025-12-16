export default function FeaturesHorizontalBoxes() {
   return (
      <section id="products" className="py-30">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h2 className="text-3xl font-bold mb-20">Why Choose Driftless Robotics?</h2>
               <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="relative bg-gray-50 p-6 rounded-lg" style={{boxShadow: '0 4px 15px rgba(25, 154, 72, 0.4)'}}>
                     <img src="/highPerformance.png" alt="High Performance" className="rounded-full object-cover w-50 h-50 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">Superior Performance</h3>
                     <p>High-speed, long-range drones engineered for endurance and precision.</p>
                  </div>
                  <div className="relative bg-gray-50 p-6 rounded-lg" style={{boxShadow: '0 4px 15px rgba(25, 154, 72, 0.4)'}}>
                     <img src="/Innovative.jpg" alt="Innovative Designs" className="rounded-full object-cover w-50 h-50 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">Innovative Designs</h3>
                     <p>Crafting innovative designs that push the boundaries of technology and elevate it to its full potential.</p>
                  </div>
                  <div className="relative bg-gray-50 p-6 rounded-lg" style={{boxShadow: '0 4px 15px rgba(25, 154, 72, 0.4)'}}>
                     <img src="/hardworkingTeam.jpeg" alt="Hardworking Team" className="rounded-full object-cover w-50 h-50 mx-auto mb-4" />
                     <h3 className="text-xl font-semibold mb-2">Hardworking Team</h3>
                     <p>Dedicated team of creators who work tirelessly with passion and precision.</p>
                  </div>
               </div>
            </div>
         </section>
   );
}