import { Download, DownloadCloud, DownloadCloudIcon, DownloadIcon, LucideDownload } from "lucide-react";

export default function Features() {
    return (

        <section className="grid grid-cols-1 bg-black ">

            <h1 className="text-2xl text-white font-bold text-center  mt-10"
            > More Benefits Await </h1>
            <div className=" w-screen grid grid-cols md:grid-cols-4 gap-4 mt-6 h-65 px-4 md:w-10/12 mx-auto mb-10">
                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-l mb-4"> Big-screen entertainment </h1>
                    <h1 className="text-white/70 text-l"> Enjoy seamless viewing on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more. </h1>
                    <img src="/svg/tv.svg" alt="devices" className="mt-4 w-12 place-self-end md:absolute bottom-2  right-3 " />
                <div className=" bg-linear-to-br from-red-600 blur-3xl  w-30 h-30 rounded-full absolute  right-0 bottom-0 z-10 " ></div> </div>

                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4"> Download and watch offline </h1>
                    <h1 className="text-white/70 text-l"> Keep your favorite titles saved and ready to watch anytime, even without an internet connection. </h1>
                    <img src="/svg/download.svg" alt="devices" className="mt-4 w-12 place-self-end md:absolute bottom-2  right-3" />
                <div className=" bg-linear-to-br from-red-600 blur-3xl  w-30 h-30 rounded-full absolute  right-0 bottom-0 z-10 " ></div> 

                </div>

                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4"> Unlimited access on any device</h1>
                    <h1 className="text-white/70 text-l"> Watch movies and series wherever you are—on your phone, tablet, laptop, or television. </h1>
                    <img src="/svg/telescope.svg" alt="devices" className="mt-4 w-12 place-self-end md:absolute bottom-2  right-3" />
                <div className=" bg-linear-to-br from-red-600 blur-3xl  w-30 h-30 rounded-full absolute  right-0 bottom-0 z-10 " ></div> 

                </div>
                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4"> Kid-friendly profiles</h1>
                    <h1 className="text-white/70 text-l"> Create separate profiles for children with parental controls and age-appropriate content. </h1>
                    <img src="/svg/user.svg" alt="devices" className="mt-4 w-12 place-self-end md:absolute -bottom-1 right-3" />
                <div className=" bg-linear-to-br from-red-600 blur-3xl  w-30 h-30 rounded-full absolute  right-0 bottom-0 z-10 " ></div> 

                </div>
            </div>

        </section>

    );
}
