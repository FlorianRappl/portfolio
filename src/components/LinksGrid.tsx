import {
  Linkedin,
  Github,
  Twitter,
  Cloud,
  Youtube,
  X,
  SquareStackIcon as StackOverflow,
  FileCode2,
} from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/florian-rappl/",
  },
  { name: "GitHub", icon: Github, url: "https://github.com/FlorianRappl" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/FlorianRappl" },
  {
    name: "Bluesky",
    icon: Cloud,
    url: "https://bsky.app/profile/florianrappl.bsky.social",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/user/FlorianRappl",
  },
  { name: "Xing", icon: X, url: "https://www.xing.com/profile/Florian_Rappl2" },
  {
    name: "Stack Overflow",
    icon: StackOverflow,
    url: "https://stackoverflow.com/users/1306682/florian-rappl",
  },
  { name: "Dev.to", icon: FileCode2, url: "https://dev.to/florianrappl" },
];

export default function LinksGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <link.icon className="w-6 h-6 mr-2" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
