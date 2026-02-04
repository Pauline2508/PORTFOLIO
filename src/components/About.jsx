const About = () => {
  return (
    <section
      id="about"
      className="py-24 max-w-7xl mx-auto px-6 animate-fadeUp"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        About Me
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">


        {/* Experience */}
        <div className="bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-4">
            💼 Professional Experience
          </h3>
          <p className="text-purple-400 font-medium">
            HCLTech, Chennai
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Mar 2022 – May 2025
          </p>
          <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2">
        <li>
            Created and executed automated test scripts using
            <span className="text-purple-400"> Selenium WebDriver</span>, with strong
            skills in test case preparation and defect tracking using JIRA.
        </li>
        <li>
            Handled home loan document verification and collaborated closely with
            applicants and internal team members to ensure accurate and timely
            processing.
        </li>
        </ul>

        </div>

        {/* Internship */}
        <div className="bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-4">
            🧑‍💻 Internship
          </h3>
          <p className="text-purple-400 font-medium">
            KGISL Micro College, Coimbatore
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Jun 2025 – Jan 2026
          </p>
          <p className="text-gray-400 leading-relaxed">
            Currently undergoing an internship in MERN Stack Development,
            actively building and enhancing full-stack web applications using
            <span className="text-purple-400">
              {" "}MongoDB, Express.js, React.js, and Node.js
            </span>. Gaining hands-on experience in developing responsive
            front-end interfaces with React.js.
          </p>
        </div>

        {/* Education */}
        <div className="bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 hover:scale-[1.02] transition">
        <h3 className="text-xl font-semibold text-white mb-4">
            🎓 Education
        </h3>

        <ul className="text-gray-400 space-y-4">
            <li>
            <span className="text-purple-400 font-medium">
                MBA – Human Resource Management
            </span>
            <br />
            Alagappa University
            <br />
            <span className="text-sm text-gray-500">
                2022 – 2024
            </span>
            </li>

            <li>
            <span className="text-purple-400 font-medium">
                B.Tech – Information Technology
            </span>
            <br />
            St. Joseph’s College of Engineering
            <br />
            <span className="text-sm text-gray-500">
                2016 – 2020
            </span>
            </li>
        </ul>
        </div>

        {/* Certifications */}
        <div className="bg-surface/70 backdrop-blur border border-purple-900/40 rounded-2xl p-6 hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-white mb-4">
            📜 Certifications
          </h3>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>MERN Stack Development Certification – KG Micro College (Online)</li>
            <li>ISTQB – Foundation Level Certificate in Software Testing</li>
            <li>DOTNET – Entry Level IT Job (HCL-TSS)</li>
            <li>Cambridge English – Entry Level Certificate in ESOL</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
