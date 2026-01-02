import Link from "next/dist/client/link";
import Image from "next/image";


export default function login() {
    return (
        <>
        <main className=" pr-6 pl-6 bg-black">
            <section className="flex flex-col  text-white">
                <nav className="flex  items-center w-full mb-10 mt-4  ">
                    <Image src="/flixx.webp" alt="Logo" width={130} height={100} className=" h-12  object-contain" />
                </nav>
                <div className=" gap-4 flex flex-col bg-black mb-28 ">
                    <h1 className=" text-3xl font-bold mb-4">Sign In</h1>

<input
  type="email"
  placeholder="Email address or phone number"
  className="bg-gray-400/20 border border-gray-500 rounded px-4 py-3"
/>

<input
  type="password"
  placeholder="Password"
  className="bg-gray-400/20 border border-gray-500 rounded px-4 py-3"
/>
                    <button className=" bg-red-600 whitespace-nowrap px-28 py-2 rounded-md font-semibold text-xm "
                    >Sign-In </button>
                    <h1 className=" text-center text-xm text-gray-400 "
                    >OR</h1>
                    <button className=" text-center bg-gray-400/40 whitespace-nowrap px-32 py-2 rounded-md font-semibold text-xm"
                    >Use a Sign-In code</button>
                    <Link href="/" className=" text-center text-xm underline ">Forgot password?</Link>
                    <label className="flex items-center gap-2 text-xm ">
                        <input type="checkbox" name="remember me" id="remember" />  Remember me
                    </label>
                    <h1 className=" text-xm text-gray-400 ">New to Fliix? <Link href="/" className=" underline text-white ">Sign up now.</Link></h1>
                    <h1 className=" text-xm text-gray-400 ">This page is protected by Google reCAPTCHA to ensure you're not a bot.<br /><span className=" underline text-blue-500 mt-2 ">Learn more.</span></h1>
                </div>
            </section>
        </main>
            <footer className=" py-8 pl-6 pr-6 text-white/60 text-sm bg-gray-700/20 w-full">
                <h1>Questions? <span className="text-white underline">Contact us</span> </h1>
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
                    <Link href="/" className=" hover:underline ">FAQ</Link>
                    <Link href="/" className=" hover:underline ">Help Center</Link>
                    <Link href="/" className=" hover:underline ">Terms of Use</Link>
                    <Link href="/" className=" hover:underline ">Privacy</Link>
                    <Link href="/" className=" hover:underline ">Cookie Preferences</Link>
                    <Link href="/" className=" hover:underline ">Corporate Information</Link>
                </div>
                <select name="language" id="language" className="bg border border-gray-500 rounded-xs py-1 mt-4 text-white">
                    <option value="en" className="text-black">English</option>
                    <option value="fr" className="text-black">French</option>
                    <option value="es" className="text-black">Spanish</option>
                </select>
            </footer>
</>
    )
}