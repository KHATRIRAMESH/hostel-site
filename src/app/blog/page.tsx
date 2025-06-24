const BlogPage = () => {
  const blogs = [
    {
      title: "The Future of Real Estate Tokenization",
      date: "June 20, 2025",
      summary:
        "Discover how tokenizing real estate assets is transforming global property investment and creating new opportunities.",
    },
    {
      title: "Why PropertyX Is the Game-Changer in Real Estate",
      date: "June 15, 2025",
      summary:
        "Explore how PropertyX simplifies property ownership and unlocks global access to verified real estate markets.",
    },
    {
      title: "5 Challenges PropertyX Solves in Real Estate",
      date: "June 10, 2025",
      summary:
        "From high costs to fragmented systems, learn how PropertyX addresses core pain points in the real estate lifecycle.",
    },
    {
      title: "5 Challenges PropertyX Solves in Real Estate",
      date: "June 10, 2025",
      summary:
        "From high costs to fragmented systems, learn how PropertyX addresses core pain points in the real estate lifecycle.",
    },
  ];

  return (
    <main className=" mt-14 mx-auto px-4 py-24 bg-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Blog & Insights
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="p-6 bg-white shadow-md rounded-xl border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.summary}</p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
