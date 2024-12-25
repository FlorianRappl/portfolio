import craftconf2023Url from "../images/craftconf2023.jpg";
import devopspro2023Url from "../images/devopspro2023.jpg";
import dotnetconf2020Url from "../images/dotnetconf2020.jpg";
import wearedevs2022Url from "../images/wearedevs2022.jpg";
import devopsjs2022Url from "../images/devopsjs2022.jpg";
import reactsummit2024Url from "../images/reactsummit2024.jpg";

const talks = [
  {
    title: "Micro Frontend Discovery",
    description: "This talk was recorded at Craft Conference 2023.",
    image: craftconf2023Url,
    link: "https://www.youtube.com/watch?v=Oc2ohxEpUpA",
  },
  {
    title: "Multiple Ships to the Island",
    description: "This talk was recorded at DevOps Pro Europe 2023.",
    image: devopspro2023Url,
    link: "https://www.youtube.com/watch?v=m4h8B3CssXY",
  },
  {
    title: "Microfrontends with Blazor",
    description: "This talk was recorded at .NET Conf 2020.",
    image: dotnetconf2020Url,
    link: "https://www.youtube.com/watch?v=npff2NjVXEE",
  },
  {
    title: "Scaling Frontends the Right Way",
    description:
      "This talk was recorded at We Are Developers World Congress 2022.",
    image: wearedevs2022Url,
    link: "https://www.wearedevelopers.com/en/videos/492/stairway-to-heaven-scaling-frontends-the-right-way",
  },
  {
    title: "Serverless for Frontends",
    description: "This talk was recorded at DevOps.js 2022.",
    image: devopsjs2022Url,
    link: "https://gitnation.com/contents/serverless-for-frontends",
  },
  {
    title: "8 Things You Did Now Know Micro Frontends Can Do",
    description: "This talk was recorded at React Summit US 2024.",
    image: reactsummit2024Url,
    link: "https://gitnation.com/contents/8-things-you-did-now-know-micro-frontends-can-do",
  },
];

export default function TalksGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Talks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <a href={talk.link} target="_blank">
              <img
                src={talk.image}
                alt={talk.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
              <p className="text-gray-600">{talk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
