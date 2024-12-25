import discoveryUrl from "../images/discovery.jpg";
import natfedUrl from "../images/natfed.jpg";
import fastreactUrl from "../images/fastreact.jpg";
import cssinmfUrl from "../images/cssinmf.jpg";
import top10apUrl from "../images/top10ap.jpg";
import communicationUrl from "../images/communication.jpg";

const articles = [
  {
    title: "Micro Frontends with Native Federation",
    description:
      "Learn advanced techniques to boost your React application's performance.",
    image: natfedUrl,
    link: "https://dev.to/florianrappl/micro-frontends-with-native-federation-56j4",
  },
  {
    title: "CSS in Micro Frontends",
    description:
      "Exploring the benefits and implementation of GraphQL in modern APIs.",
    image: cssinmfUrl,
    link: "https://dev.to/florianrappl/css-in-micro-frontends-4jai",
  },
  {
    title: "Top 10 Micro Frontend Anti-Patterns",
    description:
      "Best practices for implementing security in distributed software architectures.",
    image: top10apUrl,
    link: "https://dev.to/florianrappl/top-10-micro-frontend-anti-patterns-3809",
  },
  {
    title: "Faster Pages with React ✨",
    description:
      "A comprehensive comparison of microservices and monolithic architectures.",
    image: fastreactUrl,
    link: "https://dev.to/smapiot/faster-pages-with-react-h8j",
  },
  {
    title: "Communication Between Micro Frontends",
    description:
      "A deep dive into containerization and its impact on software deployment.",
    image: communicationUrl,
    link: "https://dev.to/florianrappl/communication-between-micro-frontends-41fe",
  },
  {
    title: "Micro Frontend Discovery - The Driver for Scalability",
    description:
      "Predictions and insights into upcoming trends in web development.",
    image: discoveryUrl,
    link: "https://dev.to/florianrappl/micro-frontend-discovery-the-driver-for-scalability-oai",
  },
];

export default function ArticlesGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <a href={article.link} target="_blank">
              <img
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
