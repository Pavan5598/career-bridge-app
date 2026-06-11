import ExploreCoursesSection from "../components/courses-components/courses";
import CoursePage from "../components/courses-components/coursesHomePage";
import SectionWhyStudents from "../components/courses-components/section3";
import LastSection from "../components/home-components/bookingWhatsapp";


export default function Page() {
  return (
    <div>
      <CoursePage />
      <ExploreCoursesSection />
      <SectionWhyStudents />
      <LastSection />
     
      
    </div>

    
  );
}