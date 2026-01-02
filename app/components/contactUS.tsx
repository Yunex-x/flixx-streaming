export default function ContactUS() {
  return (
    <section className="bg-black px-4 py-16">
      <h1 className="text-2xl md:text-3xl text-white font-bold text-center mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-3">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 p-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition">
          Get Started &gt;
        </button>
      </div>
    </section>
  );
}
