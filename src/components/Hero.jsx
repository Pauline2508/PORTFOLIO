import profileImg from "../assets/Profile.jpeg"; // add your image here

const Hero = () => {

  const handleViewResume = () => {
  window.open("/resume.pdf", "_blank");
};


  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="relative max-w-6xl w-full bg-surface/80 backdrop-blur-xl border border-purple-900/40 rounded-3xl p-10 md:p-14 animate-fadeUp">

        {/* glow */}
        <div className="absolute inset-0 rounded-3xl bg-purple-600/10 blur-3xl -z-10"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="block text-gray-300 text-xl md:text-2xl mb-2 animate-fadeUp">
                Hi, I'm
            </span>
            <span className="block text-primary animate-fadeUp delay-150">
                PAULINE PRICILLA S
            </span>
            </h1>


            <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold -mt-2">
            MERN Stack Developer
            </h2>


            <p className="text-gray-400 leading-relaxed max-w-xl">
              I'm a passionate MERN Stack Developer focused on building
              modern, scalable, and user-friendly web applications using
              MongoDB, Express, React, and Node.js. I enjoy creating clean UI
              and writing efficient backend logic.
            </p>

            <div className="flex gap-4 pt-4">
             <button
            onClick={handleViewResume}
            className="
                px-6 py-3
                font-semibold
                rounded-xl
                text-purple-900
                bg-purple-400
                hover:bg-purple-500
                hover:scale-105
                transition
            "
            >
            View Resume
            </button>



              <a
                href="#contact"
                className="px-6 py-3 border border-purple-600 text-purple-400 rounded-xl hover:bg-purple-600/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-600/40 hover:scale-105 transition">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* glow ring */}
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-600/30 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
