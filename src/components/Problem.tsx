import Image from "next/image";

const Problem = () => {
  return (
    <section
      id="problems"
      className="w-full py-20 px-6 md:px-12  flex flex-col-reverse md:flex-row gap-12 items-center justify-between bg-[#3b4773]"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Real Estate Lifecycle Problems
        </h2>
        <ul className="list-disc pl-6 pr-2 space-y-3 text-lg text-whitw">
          <li>High costs of real estate transactions</li>
          <li>Complex and lengthy processes</li>
          <li>Lack of transparency and trust</li>
          <li>Limited access to real estate markets</li>
          <li>Fragmented data and systems</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/problemfigure.webp"
          alt="Real Estate Problems"
          width={500}
          height={350}
          className="rounded-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Problem;
