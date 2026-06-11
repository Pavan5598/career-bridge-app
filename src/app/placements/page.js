import StudentsWorkingSection from "../components/about-us-components/studentWorkingCompanies";
import FAQSection from "../components/placements-components/frequentlyAskedQuestions";
import CTASection from "../components/placements-components/lastSection";
import ConsolidateUI from "../components/placements-components/newCards";
import OurPlacementAchievements from "../components/placements-components/ourPlacementAcheivements";
import PlacementsHome from "../components/placements-components/placementsHome";
import PlacementProcess from "../components/placements-components/placementsProcess";
import RealSuccessStories from "../components/placements-components/realSuccessStories";
import WhyCompaniesChooseUs from "../components/placements-components/whyCompaniesChoose";


export default function Page() {
    return (
        <div>

            <PlacementsHome />
            <OurPlacementAchievements />
            <RealSuccessStories />
            <ConsolidateUI />
            <StudentsWorkingSection />
            <PlacementProcess />
            <WhyCompaniesChooseUs />
            <FAQSection />
            <CTASection />
           
            
        </div>
    );
}