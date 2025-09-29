import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
