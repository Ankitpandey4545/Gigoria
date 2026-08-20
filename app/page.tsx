 import { Hero } from "@/components/sections/hero";
import { Schemes } from "@/components/sections/schemes";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";
import { Process } from "@/components/sections/process";
 
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Schemes />
      <Services />
      <WhyChoose />
      <Process />
 
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}