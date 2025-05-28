import { Header } from "@/components/Headers";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About/>
    </>
  );
}
