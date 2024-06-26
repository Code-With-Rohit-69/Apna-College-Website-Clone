import React from "react";
import "../Responsive/responsive.css";

function LibraryPage() {
  const imageBasePath = "./src/assets/Company/image";
  const imageCount = 6;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `${imageBasePath}${i + 1}.png`
  );
  return (
    <div className="LibraryPage w-full bg-[white] px-[4rem] py-[5rem] relative overflow-hidden">
      <div className="roundBall w-[30vw] h-[30vw] bg-[#FFC107] rounded-full absolute top-[-43%] left-[-12%]"></div>
      <div className="Library flex items-center mt-8">
        <div className="left w-[50%]">
          <div className="heading">
            <h1 className="text-[2rem] font-bold">
              NEW <span className="text-[#FF9800]">LIBRARY SOLUTION</span>
            </h1>
          </div>
          <div className="about mt-[2.5rem]">
            <p className="text-[1.3rem]">
              Get{" "}
              <span className="font-bold text-[#FF9800]">Video Solutions</span>{" "}
              of Google, Microsoft, Atlassian, Adobe, Uber, Goldman Sachs
              created by{" "}
              <span className="font-bold">same company mentors.</span>
            </p>
            <p className="text-[1.2rem] mt-[2rem]">
              i.e Google’s most Imp PYQ Video Solution by Google Mentor.
            </p>
          </div>
        </div>
        <div className="right w-[50%]">
          <img src="./src/assets/LibraryPageBackgroundImage.png" alt="" />
        </div>
      </div>
      <div className="company flex justify-between pt-[2rem] flex-wrap">
        {images.map((item, index) => (
          <div className="image w-[9rem] pr-[1rem]" key={index}>
            <img src={item} alt="" className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryPage;
