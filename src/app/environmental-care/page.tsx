import Head from "next/head";
import Image from "next/image";
import FadeInBlock from "@/components/FadeInBlock";
import SplitSection from "@/components/SplitSection";

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
            <section className="relative bg-black">
               <div className="absolute inset-0 overflow-hidden">
                  <Image
                     src="/EnvCarePageResources/Sprout.jpg"
                     alt=""
                     fill
                     priority
                     className="object-cover opacity-90"
                     style={{ objectPosition: "30% center" }}
                  />
               </div>
               <div className="relative max-w-7xl mx-auto px-6 py-70 flex flex-col items-end">
                  <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontSize: "60px" }}>Caring For Our Earth</h1>
                  <p className="text-lg text-white/95 drop-shadow max-w-150" style={{ fontSize: "24px" }}>
                     Making an impact with every choice
                  </p>
               </div>
            </section>

            <section className="relative w-full min-h-screen overflow-hidden">
               <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
               >
                  <source src="/videos/Planttimelapse.webm" type="video/webm" />
               </video>

               <div className="absolute inset-0 bg-black/40" />

               <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[15%] xl:pt-[10%] flex min-h-screen">
                  <div className="text-white">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Growing Towards Better Future
                     </h2>
                     <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
                        Thoughtful progress and responsible action guide our approach. We focus on sustainable solutions
                        that create long-term value for both people and the environment. Every decision is made with care,
                        intention, and a forward-looking mindset. Together, these efforts help build a future that is resilient,
                        balanced, and lasting.
                     </p>
                  </div>
               </div>

               <a href="https://www.vecteezy.com/free-videos/plant-growing" className="hidden">Plant Growing Stock Videos by Vecteezy</a>
            </section>

            <section className="relative xl:flex justify-center pt-30 bg-[#f6eee3] text-center pb-40">
               <div className="relative w-full max-w-7xl justify-center flex">
                  {/* Image */}
                  <Image
                     src="/EnvCarePageResources/DeepRoots.jpg"
                     alt="Roots"
                     width={500}
                     height={600}
                     className="h-[1200px] md:h-[1000px] w-auto object-cover z-10"
                  />

                  <h2 className="absolute -top-15 left-1/2 transform -translate-x-1/2 z-20 font-bold text-3xl px-4">
                     Our Environmental Initiatives
                  </h2>

                  <div className="absolute top-10 h-full w-full z-20 pt-5 grid grid-rows-4 grid-cols-1 xl:grid-cols-2 xl:gap-0 gap-35 justify-items-center">
                     <div className="p-4 max-w-96 grid col-span-1 row-span-1 row-start-1 xl:col-start-1  ">
                        <FadeInBlock direction="left" className="bg-[#f6eee3]/80 max-w-96">
                           <h3 className="font-bold mb-2 text-xl">Proper Disposal</h3>
                           <p >
                              We take responsibility for <strong>every material</strong> we use, from production through end of life. By ensuring <strong>safe</strong>
                              and <strong>ethical</strong> disposal practices, we <strong>protect</strong> the land, water, and communities around us. Our commitment goes
                              beyond compliance—we act with <strong>care for the environment</strong> we all share.
                           </p>
                        </FadeInBlock>
                     </div>

                     <div className="p-4 grid col-span-1 row-span-1 row-start-2 xl:col-start-2 max-w-96">
                        <FadeInBlock direction="right" delayMs={150} className="bg-[#f6eee3]/80 max-w-96">
                           <h3 className="font-bold text-xl mb-2">Additive Manufacturing</h3>
                           <p>
                              We <strong>leverage</strong> additive manufacturing techniques such as <strong>3D printing</strong> to produce components with greater precision and minimal
                              material waste. This approach allows us to build <strong>only</strong> what is <strong>needed</strong>, reducing scrap and excess inventory. As a result,
                              we <strong>improve</strong> efficiency while lowering our overall environmental footprint.
                           </p>
                        </FadeInBlock>
                     </div>

                     <div className="p-4 grid col-span-1 row-span-1 row-start-3 xl:col-start-1 max-w-96">
                        <FadeInBlock direction="left" delayMs={150} className="bg-[#f6eee3]/80 max-w-96">
                           <h3 className="font-bold text-xl mb-2">Waste Reduction</h3>
                           <p>
                              We actively <strong>reduce</strong> waste across our operations by <strong>improving</strong> process <strong>efficiency</strong> and minimizing excess material use.
                              Recycling, reuse, and recovery programs are <strong>integrated</strong> into our manufacturing workflows. These efforts <strong>lower</strong> landfill
                              contributions while supporting more <strong>sustainable</strong> production.
                           </p>
                        </FadeInBlock>
                     </div>

                     <div className="p-4 grid col-span-1 row-span-1 row-start-4 xl:col-start-2 max-w-96">
                        <FadeInBlock direction="right" delayMs={150} className="bg-[#f6eee3]/80 max-w-96">
                           <h3 className="font-bold text-xl mb-2">Lightweight Product Design</h3>
                           <p>
                              We <strong>engineer</strong> products to be <strong>lighter</strong> without compromising strength, durability, or performance. Using advanced materials
                              and design <strong>optimization</strong>, we <strong>reduce</strong> raw material consumption. Lighter products also require less energy to manufacture
                              and transport, contributing to <strong>lower emissions</strong>.
                           </p>
                        </FadeInBlock>
                     </div>
                  </div>
               </div>
            </section>

            <SplitSection
               title="Every Choice Matters"
               body="Every choice we make shapes the path forward. By acting with intention and responsibility, even small decisions can create meaningful, lasting impact. We focus on thoughtful solutions that support people, communities, and the environment. Together, these choices help build a future that is resilient, sustainable, and strong."
               imageSrc="/EnvCarePageResources/CrossroadSign.jpg"
               imageAlt="Every Choice Matters"
            />
         </main>
      </>
   );
}