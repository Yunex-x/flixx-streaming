
export default function Features() {
    return (
        <section className="grid grid-cols-1 bg-black">
            <h1 className="text-2xl text-white font-bold text-center mt-10">
                More Benefits Await
            </h1>

            <div className="grid grid-cols-1  md:flex md:ml-30 gap-8 m-4 px-1 md:w-10/12 mx-12 mb-12 md:mb-20 md:px-16 md:py-6">
                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg ">
                    <h1 className="text-white text-xl mb-4">Big-screen entertainment</h1>
                    <p className="text-white/70">
                        Enjoy seamless viewing on Smart TVs Blu-ray players, and more.
                    </p>
                    <img
                        src="/svg/tv.svg"
                        alt="devices"
                        className="w-12 absolute bottom-2 right-3 "
                    />
                </div>

                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4">
                        Download and watch offline
                    </h1>
                    <p className="text-white/70">
                        Keep your favorite titles saved and ready to watch anytime.
                    </p>
                    <img
                        src="/svg/download.svg"
                        alt="download"
                        className="w-12 absolute bottom-2 right-3"
                    />
                </div>

                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4">
                        Unlimited access on any device
                    </h1>
                    <p className="text-white/70">
                        Watch movies and series on phone, tablet, laptop, or TV.
                    </p>
                    <img
                        src="/svg/telescope.svg"
                        alt="access"
                        className="w-12 absolute bottom-2 right-3"
                    />
                </div>

                <div className="bg-linear-to-br from-custom-a0 relative p-6 rounded-lg">
                    <h1 className="text-white text-xl mb-4">Kid-friendly profiles</h1>
                    <p className="text-white/70">
                        Separate profiles with parental controls and age-appropriate content.
                    </p>
                    <img
                        src="/svg/user.svg"
                        alt="profiles"
                        className="w-12 absolute bottom-2 right-3"
                    />
                </div>
            </div>
        </section>
    );
}
