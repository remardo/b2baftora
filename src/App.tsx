import { useEffect } from 'react';
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
import { reachGoal } from './utils/metrika';

export function App() {
  useEffect(() => {
    const onSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      const formId = form.id || 'form_without_id';
      const goal = form.dataset.metrikaGoal || 'form_submit';
      reachGoal(goal, { formId });
      reachGoal('form_submit_any', { formId });
    };

    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

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
