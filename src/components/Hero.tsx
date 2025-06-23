const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen bg-hero-pattern bg-gradient-to-r from-cyan-50 to-blue-400"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to PropertyX</h1>
        <p className="mt-4 text-lg text-white">
          Your gateway to seamless real estate transactions.
        </p>
      </div>
    </section>
  );
};
export default Hero;
