"use client"

export default function Contact() {
   return (
      <main className="flex flex-1 bg-gray-200 text-gray-800 dark:text-gray-100 dark:bg-gray-800 px-6 py-40">
         <div className="max-w-2xl mx-auto text-center opacity-100 animate-fadeIn ease-in duration-500">
            <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#199a48' }}>Contact Us</h1>
            <p className="mb-10">
               We’d love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out!
            </p>
            <div className="text-center mt-12">
               Email us at <span style={{ color: '#199a48' }}>Austin.Attig@driftlessrobotics.com</span>
            </div>
         </div>
      </main>
   );
}
