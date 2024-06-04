import React from "react";
import '../Responsive/responsive.css';
import { TiTick } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";

function BatchOverview() {
  let overviewName = [
    "First 4.5 months : MERN Stack",
    "Next 4 months : Java+DSA",
    "Live Resume & Interview Preparation",
    "Live DSA Doubt Sessions with FAANG Teachers",
    "TA: Doubt Assistance",
    "Multiple Practical Projects",
    "Library Feature for Level Up",
    "300+ Coding Questions on All Important Topics (asked by Top Companies)",
  ];

  let information = [
    {
      icon: <BsPersonFill className="text-[2.5rem]"/>,
      headName: "LECTURES",
      para1:
        "Lectures that cover all important DSA & Development concepts for internships/placements",
      para2: (
        <span>
          Batch start date <span className="font-bold">15th Feb, 2024</span>.
          Alternate Day Schedule
        </span>
      ),
      foot1: (
        <span>
          Development Duration -{" "}
          <span className="font-semibold">4.5 months</span>
        </span>
      ),
      foot2: (
        <span>
          DSA Duration - <span className="font-semibold">4 months</span>
        </span>
      ),
    },
    {
      icon: <BsPersonVcardFill className="text-[2.5rem]"/>,
      headName: "DOUBT ASSISTANCE",
      para1:
        "When you are stuck, use multi-step Doubt Assistance. Get Access to :",
      para2: `- Alpha & Delta community with TAs
              - Instructor DSA Live Sessions 
              - Weekly DSA Doubt Sessions`,
      foot1: (
        <span>Course access is for <span className="font-bold">2 years.</span></span>
      ),
    },
  ];

  return (
    <div className="batchOverview bg-white py-[4.5rem] px-[4rem]">
      <h1 className="uppercase text-[1.5rem] font-bold">BATCH OVERVIEW</h1>
      <div className="flex flex-wrap">
        <div className="leftBatch w-full max-w-[360px]">
          <div className="lists w-full pr-[1.2rem] mt-8">
            <ul className="mt-[1rem] font-sans grid grid-cols-1 gap-2">
              {overviewName.map((item, index) => {
                return (
                  <li className="flex mt-[.5rem]" key={index}>
                    <TiTick className="text-[2rem] text-[#8BC34A] flex-shrink-0" />
                    <span className="text-[1.2rem] pl-[.3rem]">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="rightBatch flex font-sans pl-[2rem] gap-[3rem]">
          {information.map((item, index) => (
            <div className="w-full max-w-[340px] pt-[2.5rem]" key={index}>
              <div className="icon mb-[1.5rem] text-[#6674CC]">{item.icon}</div>
              <div className="heads mb-3">
                <h1 className="font-bold text-[1.5rem]">{item.headName}</h1>
              </div>
              <div className="body">
                <p className="text-[1.15rem] text-[#5e5e5e]">{item.para1}</p>
                <p className="text-[1.15rem] mt-8 text-[#5e5e5e]">{item.para2}</p>
              </div>
              <div className="footer text-[#6674CC] mt-[1rem] text-[1.2rem]">
                <h4>{item.foot1}</h4>
                <h4>{item.foot2}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BatchOverview;
