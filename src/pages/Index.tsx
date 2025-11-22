import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import HistoricalContext from "@/components/HistoricalContext";
import Legacy from "@/components/Legacy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <HistoricalContext />
      <Legacy />
      <Footer />
    </div>
  );
};

export default Index;
