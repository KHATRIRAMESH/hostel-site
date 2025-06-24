import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-white">
      <section
        id="solution"
        className="w-full py-20 px-6 md:px-12  flex flex-col md:flex-row gap-12 items-center justify-between bg-gray-50"
      >
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Real Estate Lifecycle Improvements
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
            <li>Streamlined processes</li>
            <li>Reduced transaction costs</li>
            <li>Increased transparency and trust</li>
            <li>Global access to real estate markets</li>
            <li>Unified data and systems</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/propertyX-solution.webp"
            alt="Solution"
            width={500}
            height={350}
            className="rounded-lg "
          />
        </div>
      </section>
      <section
        id="solution-details"
        className="w-full py-20 px-6 md:px-12 bg-gray-100 flex flex-col md:flex-row gap-12 items-center justify-between"
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            How PropertyX Works
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
            PropertyX leverages blockchain technology to create a secure and
            transparent platform for real estate transactions. Our protocol
            digitizes the entire real estate lifecycle, from land registration
            to sales and management, enabling verifiable ownership,
            fractionalization of assets, and automated processes.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            LEARN MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solution;
