import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "JP Handmade Jewelry (JP Jewels)",
    description:
      "A full-stack MERN e-commerce application featuring user authentication, product listings, order management, and admin controls. Designed a responsive UI and integrated REST APIs for smooth data handling.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "",
    github: "",
  },
  {
    title: "Green’s Residency Website",
    description:
      "Developed a responsive and visually appealing website using HTML, CSS, and Bootstrap to showcase property details, amenities, and contact information.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://greensresidency.netlify.app/",
    github: "https://github.com/Pauline2508/FSD-PROJECT-3",
  },
  {
    title: "JP College Website",
    description:
      "Built a responsive college website using HTML and CSS to display campus details, academic programs, and institutional information.",
    tech: ["HTML", "CSS"],
    live: "https://jpinstitute.netlify.app/",
    github: "https://github.com/Pauline2508/FSD-PROJECT-2",
  },
  {
    title: "Job Portal",
    description:
      "Implemented structured layouts for job listings, application forms, and user profile management using HTML, focusing on usability and clean design.",
    tech: ["HTML"],
    live: "https://xyzsolutionsjobportal.netlify.app/",
    github: "https://github.com/Pauline2508/FSD-PROJECT-1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 max-w-7xl mx-auto px-6 animate-fadeUp"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 hover:scale-[1.03] hover:shadow-purple-500/30 hover:shadow-xl transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-purple-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition -z-10"></div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-purple-600/10 text-purple-400 border border-purple-700/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-purple-400 hover:text-primary transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-purple-400 hover:text-primary transition"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
