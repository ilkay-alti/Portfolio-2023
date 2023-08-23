import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const GithubPicture = process.env.NEXT_PUBLIC_GITHUB_PICTURE;
  return (
    <div className="px-60 flex gap-28 my-36">
      <div className="flex flex-col gap-4 text-[#f2f3f4]">
        <h1 className="font-bold text-6xl leading-[68px] ">Hi, I am</h1>
        <h1 className="font-bold text-6xl  leading-[68px] ">İlkay Altınışık</h1>
        <h2 className="font-semibold text-3xl  leading-[68px]">
          I am a Developer
        </h2>
        {/* ! Adding Type Writter */}

        <h3 className="mb-10 text-[#97989E] text-xl leading-8 ">
          I am a motivated and versatile individual, always <br /> eager to take
          on new challenges. With a passion for <br /> learning I am dedicated
          to delivering high-quality <br /> results. With a positive attitude
          and a growth mindset,
          <br /> I am ready to make a meaningful contribution and <br /> achieve
          great things.
        </h3>
        <Link
          href="/contact"
          target="_blank"
          className="flex items-center justify-center py-4 bg-gradient-to-r from-[#E100FF] to-[#8b00ff] max-w-[300px] font-extrabold text-xl"
        >
          Check Resume
        </Link>
      </div>
      <Image
        src={GithubPicture as string}
        width={500}
        height={500}
        alt="Picture of the author"
        className="flex m-auto rounded-full border-2 border-[#854CE6] max-w-[500px] maxx-h-[500px]"
      />
    </div>
  );
};

export default About;
