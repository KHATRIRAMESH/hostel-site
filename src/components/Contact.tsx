import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 bg-gray-100  flex flex-col md:flex-row gap-12 items-center justify-between"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Have a question about PropertyX?
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
          If you would like more information about this exciting project, please contact us or follow us on social media.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          CONTACT US
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/propertyXmobile.png"
          alt="PropertyX Mobile"
          width={220}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
