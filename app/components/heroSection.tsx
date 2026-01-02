import Link from "next/link";
import Image from "next/image";
export default function heroSection() {

    return (
        <section className="">
            <section className=" relative min-h-[80svh] bg-[url(/3d.webp)] bg-cover bg-center   bg-blend-overlay bg-black/60  flex flex-col   ">
                <nav className=" flex justify-between items-center w-full text-white  ">
                    <div className="flex  ">
                        <Image src="/flixx.webp" alt="Logo" width={100} height={100} className=" h-8  ml-4  object-contain" />

                    </div>
                    <div className="flex items-center px-4 py-4 gap-4">
                        <select name="language" id="language" className="bg border border-gray-500 rounded-xs py-1">
                            <option value="en" className="text-black">English</option>
                            <option value="fr" className="text-black">French</option>
                            <option value="es" className="text-black">Spanish</option>
                        </select>
                        <Link href="/login" className="bg-red-600 px-3 py-1 whitespace-nowrap rounded-xs"
                        >Sign In</Link>

                    </div>
                </nav>
                <div className="flex  text-center items-center flex-col  text-white mt-20 px-4 leading-relaxed">
                    <h1 className=" text-4xl font-semibold md:text-5xl lg:text-7xl mb-4 md:mb-14 md:px-2 md:py-3">
                        Watch without limits.<br /> Movies, series, and more.
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">
                        Prices begin at 50 $. Stop anytime.
                    </h2>
                    <h3 className=" text-2xl mt-2 ">Join now — just enter your email to continue.</h3>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center mt-10 mb-20 px-4">
                    <input type="email" name="" id="" placeholder="Email address" className="  text-white  bg-neutral-900 border border-gray-500 rounded-xs px-4 py-3 md:px-8 md:py-4 md:text-2xl " />
                    <button className="bg-red-600 px-6 py-2 mt-4 md:mt-0 rounded-xs text-white text-lg md:py-5 ">Get Started   </button>
                </div>
            </section>
        </section>
    )

}