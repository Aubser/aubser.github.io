import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | SkyTech Drones</title>
        <meta name="description" content="Learn more about SkyTech Drones, our mission, and our commitment to aerial innovation." />
      </Head>

      <main className="bg-white min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About SkyTech</h1>
          <p className="text-lg text-gray-600 mb-4">
            SkyTech is a forward-thinking drone technology company committed to transforming industries through intelligent aerial systems. Founded by a team of aerospace engineers and AI specialists, we bring together performance, safety, and innovation.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to empower businesses and professionals with powerful, reliable, and easy-to-use drone platforms — from surveillance and mapping to inspections and deliveries.
          </p>
          <p className="text-lg text-gray-600">
            With a growing fleet of autonomous drones and an unwavering commitment to quality, SkyTech is helping organizations reach new heights — literally.
          </p>

          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}
