import avatarUrl from "../images/profile.png";

export default function PersonalDetails() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={avatarUrl}
          alt="Florian Rappl"
          width={200}
          height={200}
          className="rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">Florian Rappl</h1>
          <p className="text-xl text-gray-600 mb-2">Munich, Germany</p>
          <p className="text-lg text-gray-800 mb-2">
            Solution Architect specialized in distributed web applications
          </p>
          <p className="text-lg text-gray-600">20+ years of experience</p>
          <p className="flex flex-row flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              typescript
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              microfrontends
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              domain-decomposition
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              nodejs
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              javascript
            </span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              dotnet
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              c-sharp
            </span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              team-topologies
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
