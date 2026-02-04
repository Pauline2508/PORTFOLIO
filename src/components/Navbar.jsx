const Navbar = () => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/70 backdrop-blur-xl border-b border-purple-900/50 animate-fadeDown">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary tracking-wide relative group cursor-pointer">
          PAULINE
          <span className="absolute inset-0 blur-lg bg-purple-600 opacity-20 group-hover:opacity-40 transition"></span>
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative cursor-pointer text-gray-300 transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            >
              {item.name}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>

              {/* glow dot */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
