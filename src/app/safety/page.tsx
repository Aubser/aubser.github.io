import FadeInBlock from "@/components/FadeInBlock";
import SplitSection from "@/components/SplitSection";
import Head from "next/head";
import Image from "next/image";

export default function EnvironmentalCare() {
   return (
      <>
         <Head>
            <title>Environmental Care | SkyTech Drones</title>
            <meta
               name="description"
               content="Learn more about SkyTech Drones, our mission, and our commitment to aerial innovation."
            />
         </Head>

         <main>
            <section className="relative bg-black h-[85vh] flex items-center">
               <div className="absolute inset-0 overflow-hidden">
                  <Image
                     src="/SafetyPageResources/SafetyHelmetsLong.png"
                     alt=""
                     fill
                     priority
                     className="object-cover object-center opacity-90"
                  />
               </div>

               <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
                  <div className="w-full md:w-[45%] bg-gray-900/95 p-12">
                     <h1
                        className="text-5xl font-bold text-white mb-6 drop-shadow-lg text-[35px] lg:text-[60px]"
                     >
                        Safety
                     </h1>

                     <p
                        className="text-lg text-white/95 drop-shadow max-w-150 text-[15px] lg:text-[24px]"
                     >
                        Safety isn’t an afterthought—it’s built into every decision. We engineer, test, and operate with precision and
                        accountability, ensuring our technology performs reliably while protecting those who depend on it. Our commitment
                        to safety ensures reliability, trust, and long-term impact.
                     </p>
                  </div>
               </div>
            </section>

            <SplitSection
               title="Experience & Preparedness"
               body="With experience comes awareness. Our teams are trained to recognize potential hazards, adapt to changing conditions, and make informed decisions in real time. Preparation, clear communication, and ongoing training ensure everyone understands their role and responsibilities. This focus on readiness helps prevent incidents and keeps work moving forward safely and efficiently."
               imageSrc="/SafetyPageResources/ExperienceWork.jpg"
               imageAlt="Experience & Preparedness"
               bgClassName="bg-gray-50"
            />

            <section className="relative max-w-7xl mx-auto p-8 m-20 text-gray-800 leading-relaxed h-[800px] md:h-[800px] flex items-center justify-center">
               <h2 className="absolute -top-13 sm:top-0 xl:top-20 text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Risk Isn’t Worth It</h2>

               <Image
                  src="/SafetyPageResources/StopSign.png"
                  alt="StopSign"
                  width={500}
                  height={600}
                  className="mx-auto h-[500px] md:h-[500px] w-auto object-contain z-10"
               />

               <div className="absolute z-20 grid grid-rows-4 grid-cols-1 gap-4 justify-items-center items-center xl:grid-rows-2 xl:grid-cols-2 xl:gap-40">
                  <div className="p-4 max-w-150 bg-red-50/90 text-center grid col-span-1 row-span-1 row-start-1 xl:col-start-1 xl:text-right xl:leading-relaxed xl:bg-transparent">
                     <div>
                        <div
                           className="hidden xl:block"
                           style={{
                              float: "right",
                              width: "150px",
                              height: "150px",
                              shapeOutside: "polygon(100% 100%, 100% 0, 0 100%)",
                              shapeMargin: "12px",
                              position: "relative",
                           }}
                        />
                        <FadeInBlock direction="left">
                           <h3 className="font-semibold text-lg">Unsafe Practices</h3>
                           <p>
                              Unsafe practices put people, equipment, and operations at unnecessary risk. Identifying 
                              and stopping unsafe practices is the first step toward a safer workplace.
                           </p>
                           <div className="bg-blue-500" />
                        </FadeInBlock>
                     </div>
                  </div>

                  <div className="p-4 max-w-150 bg-red-50/90 text-center grid col-span-1 row-span-1 xl:row-start-1 xl:col-start-2 xl:text-left xl:leading-relaxed xl:bg-transparent">
                     <div>
                        <div
                           className="hidden xl:block"
                           style={{
                              float: "left",
                              width: "150px",
                              height: "150px",
                              shapeOutside: "polygon(0 100%, 100% 100%, 0 0)",
                              shapeMargin: "12px",
                              position: "relative", 
                           }}
                        />
                        <FadeInBlock direction="right">
                           <h3 className="font-semibold text-lg">Preventable Incidents</h3>
                           <p>
                              Preventable incidents occur when known risks are ignored. 
                              Stopping them starts with awareness and the discipline to address hazards 
                              before they lead to injury or loss.
                           </p>
                        </FadeInBlock>
                     </div>
                  </div>

                  <div className="p-4 max-w-150 bg-red-50/90 text-center grid col-span-1 row-span-1 xl:row-start-2 xl:col-start-1 xl:text-right xl:leading-relaxed xl:bg-transparent">
                     <div>
                        <div
                           className="hidden xl:block"
                           style={{
                              float: "right",
                              width: "150px",
                              height: "150px",
                              shapeOutside: "polygon(100% 0, 0 0, 100% 100%)",
                              shapeMargin: "12px",
                              position: "relative",
                           }}
                        />
                        <FadeInBlock direction="left">
                           <h3 className="font-semibold text-lg">Ignoring the Obvious</h3>
                           <p>
                              Ignoring the obvious allows small, visible risks to turn into incidents. 
                              Safety improves when we pause, recognize what’s in front of us, and take action 
                              before accidents occur.
                           </p>
                        </FadeInBlock>
                     </div>
                  </div>

                  <div className="p-4 max-w-150 bg-red-50/90 text-center grid col-span-1 row-span-1 xl:row-start-2 xl:col-start-2 xl:text-left xl:leading-relaxed xl:bg-transparent">
                     <div>
                        <div
                           className="hidden xl:block"
                           style={{
                              float: "left",
                              width: "150px",
                              height: "150px",
                              shapeOutside: "polygon(0 0, 100% 0, 0 100%)",
                              shapeMargin: "12px",
                              position: "relative",
                           }}
                        />
                        <FadeInBlock direction="right">
                           <h3 className="font-semibold text-lg">Risk at the Source</h3>
                           <p>
                              Risk at the source is where hazards are easiest to control. Addressing 
                              issues early prevents them from spreading through people, processes, and operations.
                           </p>
                        </FadeInBlock>
                     </div>
                  </div>
               </div>
            </section>

            <SplitSection
               title="Safety Starts with Common Sense"
               body="All effective safety practices are grounded in sound judgment and practical awareness. By making thoughtful decisions and staying attentive to potential hazards, we establish a strong foundation for risk prevention and a culture of safety. This baseline of common sense ensures that every procedure, guideline, and action builds on a shared commitment to protect people and prevent incidents."
               imageSrc="/SafetyPageResources/CommonSense.jpg"
               imageAlt="Safety Starts with Common Sense"
               bgClassName="bg-green-50"
               reverse
            />

         </main >
      </>
   );
}