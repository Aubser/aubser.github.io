import styles from "./featuresHorizontalBoxes.module.css"
import Image from "next/image";

export default function FeaturesHorizontalBoxes() {
   return (
      <section id="products" className="py-30">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-20">Why Choose Driftless Robotics?</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className={styles.box}>
                  <Image
                    src="/HomePageResources/highPerformance.avif"
                    alt="High Performance"
                    width={300}
                    height={200}
                    className={styles.boxImage}
                  />
                  <h3 className={styles.boxHeader}>Superior Performance</h3>
                  <p>High-speed, long-range drones engineered for endurance and precision.</p>
               </div>
               <div className={styles.box}>
                  <Image
                    src="/HomePageResources/Innovative.avif"
                    alt="Innovative Designs"
                    width={300}
                    height={200}
                    className={styles.boxImage}
                  />
                  <h3 className={styles.boxHeader}>Innovative Designs</h3>
                  <p>Crafting innovative designs that push the boundaries of technology and elevate it to its full potential.</p>
               </div>
               <div className={styles.box}>
                  <Image
                    src="/HomePageResources/hardworkingTeam.webp"
                    alt="Hardworking Team"
                    width={300}
                    height={200}
                    className={styles.boxImage}
                  />
                  <h3 className={styles.boxHeader}>Hardworking Team</h3>
                  <p>Dedicated team of creators who work tirelessly with passion and precision.</p>
               </div>
            </div>
         </div>
      </section>
   );
}