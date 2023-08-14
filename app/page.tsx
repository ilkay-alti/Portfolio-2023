import ThemeButton from "@/Components/ThemeButton";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div>
      <h1 className="dark:text-purple-800">Hello World</h1>
      <ThemeButton />
    </div>
  );
};

export default HomePage;
