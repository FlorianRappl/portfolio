import nodebookUrl from "../images/nodebook.jpg";
import mfbookUrl from "../images/mfbook.jpg";
import qftbookUrl from "../images/qftbook.jpg";

const books = [
  {
    title: "The Art of Micro Frontends (Second Edition)",
    description:
      "Build highly scalable, distributed web applications with multiple teams.",
    image: mfbookUrl,
    link: "https://www.packtpub.com/en-de/product/the-art-of-micro-frontends-9781835466377",
  },
  {
    title: "Modern Frontend Development with Node.js",
    description:
      "A compendium for modern JavaScript web development within the Node.js ecosystem.",
    image: nodebookUrl,
    link: "https://www.packtpub.com/en-de/product/modern-frontend-development-with-nodejs-9781804617380",
  },
  {
    title:
      "Feynman Diagram Sampling for Quantum Field Theories",
    description:
      "This work discusses the application of Feynman diagram sampling in quantum field theories.",
    image: qftbookUrl,
    link: "https://www.amazon.de/Feynman-Sampling-Theories-Supercomputer-Dissertationsreihe/dp/3868451331",
  },
];

export default function BooksGrid() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((article, index) => (
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
