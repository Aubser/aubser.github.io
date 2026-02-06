import SplitSection from "../../components/SplitSection";
import ValueBlocks from "../../components/ValueBlocks/ValueBlocks";
import { TEAM_VALUES, TEAM_VALUES_TITLE } from "../../utils/teamValues";
import Head from "next/head";
import Image from "next/image";

export default function OurTeam() {
   return (
      <>
         <Head>
            <title>About Us | SkyTech Drones</title>
            <meta
               name="description"
               content="Learn more about SkyTech Drones, our mission, and our commitment to aerial innovation."
            />
         </Head>

         <main>
            <section className="relative h-[520px] md:h-[700px] overflow-hidden">

               {/* Image */}
               <div className="absolute inset-0 md:right-0 md:left-auto md:w-[65%]">
                  <Image
                     src="/OurTeamResources/TeamPhotoHighQual.jpg"
                     alt="Hardworking Team"
                     fill
                     priority
                     className="object-cover"
                  />
               </div>

               {/* Gradient — desktop only */}
               <div
                  className="absolute inset-0 pointer-events-none hidden md:block"
                  style={{
                     background: `
                       linear-gradient(
                         to right,
                         white 0%,
                         white calc(50% - 300px),
                         rgba(255,255,255,0.9) 50%,
                         transparent calc(50% + 300px),
                         transparent 100%
                       )
                     `,
                  }}
               />

               {/* Mobile gradient (simpler & vertical) */}
               <div className="absolute inset-0 md:hidden bg-gradient-to-t from-white/95 to-transparent" />

               {/* Content */}
               <div className="relative max-w-8xl mx-auto h-full px-6 md:px-40 flex items-center">
                  <div className="w-full md:w-[50%]">
                     <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
                        Our Team
                     </h1>
                     <p className="text-base md:text-lg text-black/80 leading-relaxed">
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
            />

            <SplitSection
               title="Empowered by Culture"
               body="At the heart of our success is a culture that inspires collaboration and innovation. We believe that when our team thrives, our ideas and achievements soar. By nurturing an environment where curiosity, creativity, and mutual support are valued, we empower every team member to contribute their best and drive meaningful impact."
               imageSrc="/OurTeamResources/CoffeeCulture.jpg"
               imageAlt="Team Culture"
               reverse
               bgClassName="bg-green-50"
            />

            <ValueBlocks
               title={TEAM_VALUES_TITLE}
               values={TEAM_VALUES}
            />

         </main>
      </>
   );
}
