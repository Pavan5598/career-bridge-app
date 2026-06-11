import { ContactRoundIcon } from "lucide-react";
import BranchesSection from "../components/contactUs-components/branches";
import ContactUsHeroSection from "../components/contactUs-components/contactUsHomePage";
import GetInTouchWithUs from "../components/contactUs-components/getInTouchWithUs";
import SupportCards from "../components/contactUs-components/weAreHereToHelp";
import ContactUsCTASection from "../components/contactUs-components/contactUsCTA";



export default function ContactUs() {
    return(
        <div>
            <ContactUsHeroSection />

            <SupportCards />

            <GetInTouchWithUs />
            <BranchesSection />
            <ContactUsCTASection />


            
        </div>
    );
}