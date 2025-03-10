import PersonalDetails from "./components/PersonalDetails";
import ProjectsGrid from "./components/ProjectsGrid";
import LinksGrid from "./components/LinksGrid";
import TalksGrid from "./components/TalksGrid";
import ArticlesGrid from "./components/ArticlesGrid";
import BooksGrid from "./components/BooksGrid";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf8" />
        <title>Florian Rappl, Solutions Architect</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <PersonalDetails />
            <LinksGrid />
            <ProjectsGrid />
            <TalksGrid />
            <ArticlesGrid />
            <BooksGrid />
          </div>
        </main>
      </body>
    </html>
  );
}
