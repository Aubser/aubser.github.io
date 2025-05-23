import backgroundLine from "../../public/lineGreen.jpg"

export default function ContentBoxes() {
   return (
      <div className="bg-[#111118] text-white">
         <section className="relative px-8 pt-16">
            <div className="absolute inset-0 bg-cover md:bg-contain bg-center bg-[#141720]" style={{ backgroundImage: `url(${backgroundLine.src})` }} />
            <h2 className="relative text-3xl font-bold mb-12 text-white text-center z-10">Real-World Applications</h2>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-15 md:gap-x-10 pb-25 place-items-center">

               {/* Top */}
               <div className="md:col-start-1 flex flex-col md:justify-self-end md:self-start text-center md:text-right z-10 md:pl-20">
                  <h2 className="mt-4 text-xl font-semibold tracking-widest">Agriculture</h2>
                  <br/>
                  <p className="text-gray-300">Our high-performance drones are perfect for crop monitoring, field mapping, disaster assessment, and more—delivering precise insights that save you time and reduce operational costs.</p>
               </div>
               <div className="md:col-start-2 flex flex-col md:place-self-start z-10">
                  <img className="rounded-lg" src="/agriculture.jpg" alt="Visual 1" width={300} height={300} />
               </div>
               
               {/* Middle */}
               <div className="md:col-start-2 md:row-start-2 flex flex-col md:place-self-start text-center md:text-left z-10 md:pr-20">
                  <h2 className="mt-4 text-xl font-semibold tracking-widest">Military</h2>
                  <br/>
                  <p className="text-gray-300">With our drones’ extended flight duration, missions such as search and rescue or payload deployment can be carried out more efficiently—with fewer interruptions and significantly longer operational range.</p>
               </div>
               <div className="md:col-start-1 md:row-start-2 flex flex-col md:place-self-end z-10">
                  <img className="rounded-lg" src="/searchAndRescue.jpg" alt="Visual 2" width={300} height={300} />
               </div>

               {/* Bottom Right */}
               <div className="md:col-start-1 md:row-start-3 flex flex-col md:justify-self-end text-center md:text-right md:self-start md:pl-20 z-10">
                  <h2 className="mt-4 text-xl font-semibold tracking-widest">Environmental Monitoring</h2>
                  <br/>
                  <p className="text-gray-300">Our long-range drones are ideal for tracking wildlife, monitoring forests, and assessing pollution—empowering environmental initiatives to better protect and restore our planet.</p>
               </div>
               <div className="md:col-start-2 md:row-start-3 flex flex-col md:place-self-start z-10">
                  <img className="rounded-lg" src="/factory-producing-co2-pollution.jpg" alt="Visual 3" width={300} height={300} />
               </div>
            </div>
         </section>
      </div>
   );
}
