import Image from "next/image";

const Overview = () => {
  return (
    <section
      id="overview"
      className="w-full py-20 px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center justify-between bg-gray-50"
    >
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/co-founder.jpeg"
          alt="Dipak Sharma - Co-Founder"
          width={300}
          height={300}
          className="rounded-full shadow-xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left max-w-xl">
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-gray-800">Dipak Sharma</h4>
          <h5 className="text-md font-medium text-gray-600">
            Co-Founder & CTO
          </h5>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          “The PropertyX Protocol addresses the need to make the digitisation of
          real estate simple, more secure, more efficient and open opportunities
          to a broader range of people. Our protocol looks to create a global
          framework for the digitisation and verification of real estate assets;
          from land registration, planning, construction, sales and management.
          Empowering regions to unlock verifiable ownership, fractionalisation
          of assets, automated processes and unlimited growth opportunities.”
        </p>
      </div>
    </section>
  );
};

export default Overview;
