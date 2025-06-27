import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Binaya Tripathi",
      title: "Founder/CEO",
      image: "/binaya-tripathi.jpeg",
      description:
        "Over 22 years industry experience. Built up many successful property businesses throughout UK, Europe & USA.",
    },
    {
      name: "Dipak Sharma",
      title: "Co-Founder/CTO",
      image: "/dipak-sharma.jpeg",
      description:
        "Delivered big infrastructure projects for Coca-Cola & hundreds of web2 applications. Graduate of PBA, UCL Berkeley.",
    },
    {
      name: "Mahan Gurung",
      title: "Blockchain Developer",
      image: "/mahan-gurung.jpeg",
      description:
        "Specialized in developing blockchain solutions and leveraging decentralized technologies such as the InterPlanetary File System (IPFS). Additionally, I design and oversee comprehensive system architectures to ensure robust, scalable project implementations.",
    },
    {
      name: "Basanta Subedi",
      title: "Blockchain Developer",
      image: "/basanta-subedi.jpeg",
      description:
        "Blockchain developer with a strong focus on building secure and decentralized applications. I specialize in smart contract development on both Ethereum and Stacks blockchain, leveraging technologies such as Solidity, Clarity, Ethers.js, and Stacks.js to bring Web3 ideas to life.",
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
