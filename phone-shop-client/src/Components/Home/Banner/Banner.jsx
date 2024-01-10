import bg from "../../../assets/banner-bg.jpg";
const Banner = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-neutral-950/50">
        <div
          className="hero min-h-screen text-) {
            
        }"
        >
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white"><span className="text-red-500">Welcome</span> to Our <span className="line-clamp-1">Phone<span className="text-main italic">Mania</span></span></h1>
              <p className="py-6 text-xl text-gray-300">
                Dive into our exclusive collection of cutting-edge smartphones,
                carefully curated to enhance your mobile experience and keep you
                ahead in today's tech-driven world.
              </p>
              <button className="btn bg-main text-white border-none btn-wide">Grab New</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
