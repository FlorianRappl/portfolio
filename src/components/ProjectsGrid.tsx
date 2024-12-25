import piralUrl from "../images/piral.jpg";
import anglesharpUrl from "../images/anglesharp.jpg";
import magesUrl from "../images/mages.jpg";
import detsUrl from "../images/dets.jpg";
import sumericsUrl from "../images/sumerics.jpg";
import picardUrl from "../images/picard.jpg";

const projects = [
  {
    title: "Piral",
    description:
      "Framework for next generation web apps using micro frontends.",
    image: piralUrl,
    link: "https://github.com/smapiot/piral",
  },
  {
    title: "AngleSharp",
    description: "Web tools and utilities for .NET.",
    image: anglesharpUrl,
    link: "https://github.com/AngleSharp/",
  },
  {
    title: "Mages",
    description:
      "MAGES is a very simple, yet powerful, expression parser and interpreter.",
    image: magesUrl,
    link: "https://github.com/FlorianRappl/Mages",
  },
  {
    title: "dets",
    description:
      "Generate a single declaration file for your TypeScript project.",
    image: detsUrl,
    link: "https://github.com/FlorianRappl/dets",
  },
  {
    title: "Sumerics",
    description:
      "Sumerics is a touch enabled sensor application for doing numerical calculations on Windows 8+ computers. ",
    image: sumericsUrl,
    link: "https://github.com/FlorianRappl/Sumerics",
  },
  {
    title: "Picard.js",
    description:
      "Picard.js is a free, open-source, cross-platform Micro Frontend orchestrator.",
    image: picardUrl,
    link: "https://github.com/picardjs/",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <a href={project.link} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
