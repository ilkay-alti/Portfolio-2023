import ThemeButton from "@/Components/ThemeButton";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      <h1>Hello World</h1>
      <ThemeButton />
    </>
  );
};

export default HomePage;
