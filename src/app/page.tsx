import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
  <main className="min-h-screen no-scrollbar::-webkit-scrollbar no-scrollbar antialiased ">
  <HeroSection/>
  <FeaturedCourses/>
  <WhyChooseUs/>
  <TestimonialCards/>
  <UpcomingWebinar/>
  <Instructors />
  <Footer/>
  </main>
  </>
  );
}
