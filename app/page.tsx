import About from "@/Containers/About";
import Education from "@/Containers/Education";
import Exprerience from "@/Containers/Exprerience";
import Navbar from "@/Containers/Navbar";
import Projects from "@/Containers/Projects";
import Skilks from "@/Containers/Skilks";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="dark:bg-[#191924] select-none ">
      <Navbar />
      <About />
      <Skilks />
      <Exprerience />
      <Projects />
      <Education />
    </div>
  );
};

export default HomePage;
