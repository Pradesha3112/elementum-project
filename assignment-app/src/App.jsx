import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { LogoCloud } from "./components/LogoCloud/LogoCloud";
import { Features } from "./components/Features/Features";
import { Showcase } from "./components/Showcase/Showcase";
import { Stats } from "./components/Stats/Stats";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Pricing } from "./components/Pricing/Pricing";
import { CtaBanner } from "./components/CtaBanner/CtaBanner";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Showcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
