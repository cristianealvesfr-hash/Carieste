import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Procedures } from "../components/Procedures";
import { Results } from "../components/Results";
import { Authority } from "../components/Authority";
import { Experience } from "../components/Experience";
import { Location } from "../components/Location";
import { FAQ } from "../components/FAQ";
import { GoogleMapsSection } from "../components/GoogleMapsSection";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { InstagramFloat } from "../components/InstagramFloat";

export function HomePage() {
  return (
    <div className="min-h-screen bg-porcelana text-marrom-profundo">
      <Header />
      <main>
        <Hero />
        <Procedures />
        <Results />
        <Authority />
        <Experience />
        <Location />
        <FAQ />
        <GoogleMapsSection />
        <FinalCTA />
      </main>
      <Footer />
      <InstagramFloat />
      <WhatsAppFloat />
    </div>
  );
}
