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
        </div>
      </div>
    </div>
  );
}
