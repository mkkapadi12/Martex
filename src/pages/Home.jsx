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
import logopink from "../assets/images/logo-pink.png";
import logowhite from "../assets/images/logo-white.png";
import bg from "../assets/images/bg-03.jpg";

export default function Home() {
  const data = {
    logo: logowhite,
    logoscroll: logopink,
    // bg: "bg-[#8a4be0]",
    link_color: "!text-[#fff]",
    btn_color: "bg-martex-light_pink",
    btn_text: "Sign up",
    text: "text-white",
  };
  const cta_data = {
    btn_color: "bg-martex-light_pink",
    btn_text: "Get started – it's free",
    title: `Starting with Martex is easy, fast and free`,
    bg: bg,
  };
  return (
    <>
      <Navbar data={data} />
      <Hero />
      <Features />
      <Engagement />
      <SocialMarketing />
      <Stats />
      <SmarterWayToWork />
      <SmartSolutionsSection />
      <TrackProgress />
      <Company title={"Martex is loved and trusted by thousands:"} />
      <SolutionsSection />
      <Productivity />
      <Discover />
      <Testimonials />
      <Automate />
      <FAQSection get_color={"text-martex-light_pink"} />
      <CTASection cta_data={cta_data} />
      <Footer logo={logopink} />
    </>
  );
}
