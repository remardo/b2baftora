import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Calculator } from './components/Calculator';
import { Showcase } from './components/Showcase';
import { Production } from './components/Production';
import { Logistics } from './components/Logistics';
import { Segments } from './components/Segments';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Showcase />
        <Production />
        <Logistics />
        <Segments />
        <Cases />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
