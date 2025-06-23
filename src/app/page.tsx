import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <main className="flex  flex-col ">
      <Hero />
      <Overview />
      <Problem />

      <Solution />

      <Contact />
    </main>
  );
}
