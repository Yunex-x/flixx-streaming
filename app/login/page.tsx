import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <>
      {/* ===== MAIN ===== */}
      <main className="relative min-h-screen bg-black md:bg-[url('/3d.webp')] md:bg-cover md:bg-center md:bg-blend-overlay md:bg-black/6 ">
        {/* Overlay (desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-black/20" />

        {/* Content */}
        <section className="relative z-10 flex min-h-screen flex-col text-white md:items-center md:justify-center px-6">
          {/* Logo */}
          <nav className="w-full max-w-6xl mx-auto mb-10 md:absolute md:top-6 md:left-6">
            <Image
              src="/flixx.webp"
              alt="Logo"
              width={130}
              height={50}
              className="h-12 object-contain "
              priority
            />
          </nav>
          <div className="h-0 md:h-20" />


          {/* ===== LOGIN CARD ===== */}
          <div
            className="
              flex flex-col gap-4
              bg-black
              md:bg-black/75
              md:w-105
              md:p-12
              md:rounded-md
              md:mt-12
            "
          >
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>

            <input
              type="email"
              placeholder="Email address or phone number"
              className="bg-gray-400/20 border border-gray-500 rounded px-4 py-3 outline-none focus:border-white"
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-gray-400/20 border border-gray-500 rounded px-4 py-3 outline-none focus:border-white"
            />

            <button className="bg-red-600 py-3 rounded-md font-semibold hover:bg-red-700 transition">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-400">OR</p>

            <button className="bg-gray-500/40 py-3 rounded-md font-semibold hover:bg-gray-500/50 transition">
              Use a Sign-In Code
            </button>

            <Link href="/" className="text-center text-sm underline">
              Forgot password?
            </Link>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember me
            </label>

            <p className="text-sm text-gray-400">
              New to Fliix?{" "}
              <Link href="/" className="underline text-white">
                Sign up now.
              </Link>
            </p>

            <p className="text-xs text-gray-400 leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <br />
              <span className="underline text-blue-500 cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
        </section>
                <div className="h-0 md:h-20" />
      </main>


      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-500/5 text-white/60 text-sm px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6">
            Questions?{" "}
            <Link href="/" className="underline text-white">
              Contact us
            </Link>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Link href="/" className="hover:underline">FAQ</Link>
            <Link href="/" className="hover:underline">Help Center</Link>
            <Link href="/" className="hover:underline">Terms of Use</Link>
            <Link href="/" className="hover:underline">Privacy</Link>
            <Link href="/" className="hover:underline">Cookie Preferences</Link>
            <Link href="/" className="hover:underline">Corporate Information</Link>
          </div>

          <select className="bg-black border border-gray-500 rounded px-3 py-1">
            <option className="text-black">English</option>
            <option className="text-black">French</option>
            <option className="text-black">Spanish</option>
          </select>
        </div>
      </footer>
    </>
  );
}
