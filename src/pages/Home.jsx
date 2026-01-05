import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Engagement from "../components/Engagement";
import SocialMarketing from "../components/SocialMarketing";
import Stats from "../components/Stats";
import SmartSolutionsSection from "../components/SmartSolutions";
import SmarterWayToWork from "../components/SmarterWayToWork";
import TrackProgress from "../components/TrackProgress";
import SolutionsSection from "../components/SolutionsSection";
import Discover from "../components/Discover";
import Productivity from "../components/Productivity";
import Automate from "../components/Automate";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Company from "../components/Company";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Engagement />
      <SocialMarketing />
      <Stats />
      <SmarterWayToWork />
      <SmartSolutionsSection />
      <TrackProgress />
      <Company />
      <SolutionsSection />
      <Productivity />
      <Discover />
      <Testimonials />
      <Automate />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
