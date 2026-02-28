import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { ActivityHub } from "@/components/GithubGraph";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { FromCuriosityToCode } from "@/components/Story";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">

      <Hero />
      <Education />
      <TechStack/>
      <ActivityHub/>
      <Projects/>
      <FromCuriosityToCode/>
      <Contact/>
      <Footer/>
    </main>
  );
}