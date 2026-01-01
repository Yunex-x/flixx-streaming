import SparksCarouselDemo from "../carousel";

export default function TrendingSection() {
  return (
    <section className="bg-black">
      {/* Header with curved border */}
      <div className="relative h-72 overflow-hidden">
        <div
          className="
            absolute top-0 left-[-50%]
            w-[200%] h-full
            rounded-t-[50%_100%]
            border-t-[5px] border-red-900
          "
        ></div>

        <div className="relative z-30 flex items-center h-full px-6 md:px-16 text-white">
          <h2 className="text-xl md:text-4xl">Trending Now</h2>
        </div>
      </div>

      {/* Carousel section */}
      <div className="relative  -mt-40 px-6 md:px-16">
        <SparksCarouselDemo />
      </div>
    </section>
  );
}
