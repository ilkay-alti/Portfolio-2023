import ThemeButton from "@/Components/ThemeButton";
import About from "@/Containers/About";
import Contact from "@/Containers/Contact";
import Education from "@/Containers/Education";
import Exprerience from "@/Containers/Exprerience";
import Footer from "@/Containers/Footer";
import Navbar from "@/Containers/Navbar";
import Projects from "@/Containers/Projects";
import Skilks from "@/Containers/Skilks";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="dark:bg-[#191924]  ">
      <Navbar />
      <About />
      <Skilks />
      <Exprerience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
