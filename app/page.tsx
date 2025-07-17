import { NextPage } from "next";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import ServicesOffered from "./components/Services";
import AboutMeSection from "./components/Aboutme";
import ContactSection from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <Header />
      <BookingForm />
      <ServicesOffered />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
