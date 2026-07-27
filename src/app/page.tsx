import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
