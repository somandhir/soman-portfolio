import { Education } from "@/components/Education";
import { ActivityHub } from "@/components/GithubGraph";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="flex flex-col items-center">

      <Hero />
      <Education />
      <TechStack/>
      <ActivityHub/>
      <Projects/>
    </main>
  );
}