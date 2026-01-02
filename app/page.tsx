import Navbar from "./components/heroSection";
import TrendingSection from "./components/TrendingSection";
import Features from "./components/features";
import Faq from "./components/faq";
import ContactUS from "./components/contactUS";
import Footer from "./components/footer";
export default function Home() {
  return (
    
      <main className="bg-black">

      <Navbar />
      <TrendingSection />
      <Features />
      <Faq />
      <ContactUS />
      <Footer />
    </main>
   
  )
}