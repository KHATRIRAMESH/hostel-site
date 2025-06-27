import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Binaya Tripathi",
      title: "Founder & CEO",
      image: "/binaya-tripathi.jpeg",
    },

    {
      name: "Dipak Sharma",
      title: "Blockchain Developer",
      image: "/dipak-sharma.jpeg",
    },
    {
      name: "Mahan Gurung",
      title: "Blockchain Developer",
      image: "/mahan-gurung.jpeg",
    },
    {
      name: "Basanta Subedi",
      title: "Blockchain Developer",
      image: "/basanta-subedi.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white mt-14">
      <h1>Meet the team</h1>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet the team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have a great mix of technical knowledge and industry experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Member Photo */}
              <div className="mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Member Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">{member.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
