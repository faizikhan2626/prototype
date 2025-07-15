import { NextPage } from "next";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import ServicesOffered from "./components/Services";
import AboutMeSection from "./components/Aboutme";
import ContactSection from "./components/Contact";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <BookingForm />
      <ServicesOffered />
      <AboutMeSection />
      <ContactSection />
    </div>
  );
};

export default Home;
