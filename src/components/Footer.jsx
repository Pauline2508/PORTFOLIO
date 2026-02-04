const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-purple-950 via-gray-950 to-gray-900 border-t border-purple-900">

      {/* Glow */}
      <div className="absolute inset-0 blur-3xl opacity-20 bg-purple-700"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-gray-400 hover:text-purple-400 transition duration-300">
          © {new Date().getFullYear()} Pauline Pricilla S. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-xs text-gray-500 tracking-wide">
          Built with <span className="text-purple-400">React</span> &{" "}
          <span className="text-purple-400">Tailwind CSS</span>
        </p>

        {/* Right */}
        <div className="flex gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-gray-400 transition-all duration-300 hover:text-purple-400 hover:-translate-y-1"
          >
            GitHub
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pauline-pricilla-s-3544871b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-gray-400 transition-all duration-300 hover:text-purple-400 hover:-translate-y-1"
          >
            LinkedIn
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
