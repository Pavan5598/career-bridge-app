import AboutCareerBridge from "../components/home-components/aboutcareerbridge";
import LastSection from "../components/home-components/bookingWhatsapp";
import Companies from "../components/home-components/companies";
import CoursesSection from "../components/home-components/explorecourses";
import HomeHero from "../components/home-components/homeHero";
import InsightsPage from "../components/home-components/insightsPage";
import SuccessStories from "../components/home-components/successstories";
import TrainingApproach from "../components/home-components/trainingApproach";
import WhyCareer from "../components/home-components/whycareer";



export default function HomePage() {
  return (
    <div>
      <HomeHero />
       <Companies />
       <AboutCareerBridge />
       <WhyCareer />
        <CoursesSection />
        <SuccessStories />
        <TrainingApproach />
        <InsightsPage />
        <LastSection />

    </div>
   
  );
}