"use client"

export default function Contact() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-10">
          We’d love to hear from you. Whether you have a question about features, pricing, or anything else — our team is ready to answer.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows={5}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-12 text-gray-400 text-sm">
        Or email us at <span className="text-blue-400">contact@driftlessrobotics.com</span>
      </div>
    </main>
  );
}
