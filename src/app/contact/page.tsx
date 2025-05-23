"use client"

export default function Contact() {
   return (
      <main className="flex flex-1 bg-gray-900 text-white px-6 py-40">
         <div className="max-w-2xl mx-auto text-center opacity-100 animate-fadeIn ease-in duration-500">
            <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#199a48' }}>Contact Us</h1>
            <p className="text-gray-400 mb-10">
               We’d love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out!
            </p>
            <div className="text-center mt-12 text-gray-400">
               Email us at <span style={{ color: '#199a48' }}>attiga@driftlessrobotics.com</span>
            </div>
         </div>
      </main>
   );
}
