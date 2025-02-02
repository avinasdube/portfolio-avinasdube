import FooterSection from "../components/FooterSection/FooterSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

const Layout = ({ children }) => {
  return (
    <div>
      <WelcomeSection />
      <ProjectsSection />
      <QuoteSection />
      <FooterSection />
    </div>
  );
}

export default Layout;