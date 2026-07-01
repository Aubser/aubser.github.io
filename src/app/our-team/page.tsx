import SplitSection from "../../components/SplitSection";
import ValueBlocks from "../../components/ValueBlocks/ValueBlocks";
import { TEAM_VALUES, TEAM_VALUES_TITLE } from "../../utils/teamValues";
import Head from "next/head";
import Image from "next/image";

export default function OurTeam() {
   return (
      <>
         <Head>
            <title>About Us | Driftless Robotics</title>
            <meta
               name="description"
               content="Learn more about Driftless Robotics, our mission, and our commitment to aerial innovation."
            />
         </Head>

         <main className="dark:bg-[#1a1a1a]">
            <section className="relative h-[520px] md:h-[700px] overflow-hidden dark:bg-black shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)]">

               {/* Image (60%) */}
               <div className="absolute inset-y-0 right-0 w-full md:w-[60%]">
                  <Image
                     src="/OurTeamResources/TeamPhotoHighQual.jpg"
                     alt="Hardworking Team"
                     fill
                     priority
                     className="object-cover"
                  />

                  {/* Overlay ON TOP OF IMAGE ONLY */}
                  <div
                     className="absolute inset-0 pointer-events-none
                        bg-gradient-to-l from-transparent via-white/10 to-white
                      dark:via-black/70 dark:to-black"
                  />
               </div>

               {/* Mobile gradient */}
               <div className="absolute inset-0 md:hidden bg-gradient-to-t from-white/95 dark:from-black/95 to-transparent" />

               {/* Content (40%) */}
               <div className="relative max-w-8xl mx-auto h-full px-6 md:px-40 flex items-center">
                  <div className="w-full md:w-[40%]">
                     <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                        Our Team
                     </h1>
                     <p className="text-base md:text-lg leading-relaxed">
                        Our team is a dedicated group of award-winning engineers, pilots, and innovators
                        committed to delivering precise, reliable drone solutions through collaboration,
                        expertise, and a passion for pushing aerial technology forward.
                     </p>
                  </div>
               </div>

            </section>

            <SplitSection
               title="Built on Experience"
               body="Our team brings together years of hands-on experience across engineering, aerial operations, and real-world problem solving, enabling us to design and deliver dependable drone solutions tailored to every mission. By combining technical expertise with innovative thinking, we ensure each project meets the highest standards of safety, efficiency, and performance, empowering our clients to achieve their objectives with confidence."
               imageSrc="/OurTeamResources/Experience.jpg"
               imageAlt="Built On Experience"
               darkMode="dark:bg-gray-800"
            />

            <SplitSection
               title="Empowered by Culture"
               body="At the heart of our success is a culture that inspires collaboration and innovation. We believe that when our team thrives, our ideas and achievements soar. By nurturing an environment where curiosity, creativity, and mutual support are valued, we empower every team member to contribute their best and drive meaningful impact."
               imageSrc="/OurTeamResources/CoffeeCulture.jpg"
               imageAlt="Team Culture"
               reverse
               bgClassName="bg-green-50"
               darkMode="dark:bg-green-900"
            />

            <ValueBlocks
               title={TEAM_VALUES_TITLE}
               values={TEAM_VALUES}
            />

         </main>
      </>
   );
}
