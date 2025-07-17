import AdminAboutPage from "@/app/components/AboutAdmin";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <AdminAboutPage />
      <Footer />
    </div>
  );
};

export default page;
