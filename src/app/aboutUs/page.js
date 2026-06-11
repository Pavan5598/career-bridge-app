import CertificationsSection from "../components/about-us-components/certifications";
import Foundersection from "../components/about-us-components/founder";
import AboutHeroSection from "../components/about-us-components/home";
import StudentsWorkingSection from "../components/about-us-components/studentWorkingCompanies";
import MissionVisionValues from "../components/about-us-components/mission";
import TrainingApproach from "../components/about-us-components/trainingApproach";
import LastSection from "../components/home-components/bookingWhatsapp";
import CareerSuccessSection from "../components/about-us-components/careerSuccess";


export default function AboutUSPage() {
  return (
    <div>
      <AboutHeroSection  />
      <Foundersection />
      <MissionVisionValues />
      <TrainingApproach />
      <CareerSuccessSection  />
      <CertificationsSection />
      <StudentsWorkingSection />
      <LastSection />
      
      

    </div>
   
  );
}