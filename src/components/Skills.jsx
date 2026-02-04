import {
  Code,
  Layout,
  Paintbrush,
  Database,
  Server,
  GitBranch,
  Cloud,
  Bug,
  Figma,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code },
  { name: "CSS3", icon: Paintbrush },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Bootstrap", icon: Layout },
  { name: "JavaScript", icon: Code },
  { name: "React.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Selenium (C# – Basic)", icon: Bug },
  { name: "BDD Framework", icon: Bug },
  { name: "GitHub", icon: GitBranch },
  { name: "Netlify", icon: Cloud },
  { name: "UI / UX Design", icon: Figma },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 max-w-7xl mx-auto px-6 animate-fadeUp"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 hover:shadow-purple-500/30 hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="p-3 rounded-xl bg-purple-600/10 group-hover:bg-purple-600/20 transition">
              <Icon className="w-6 h-6 text-purple-400 group-hover:text-primary transition" />
            </div>

            {/* Skill name */}
            <p className="text-gray-300 text-sm font-medium text-center">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
