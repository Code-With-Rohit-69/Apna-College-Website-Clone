import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import './Courses.css'
import '../Responsive/responsive.css';

function Courses() {

  let values1 = [
    "Complete Web Development (MERN)",
    "Frontend & React",
    "Backend & Database",
    "Version Control (Git & Github)",
    "Zoom, Airbnb & multiple projects",
    "Individual Doubt support : TA",
    "Live Mentorship Sessions",
    "Certificate of Completion",
    "Duration - 4.5 months",
    "Start Date - 15th February, 2024",
  ];

  let values2 = [
    "Everything included in New Delta",
    "Java Language",
    "Data Structures & Algorithms",
    "Advanced DSA",
    "Live Doubt Sessions with FAANG Engineers : alternate day",
    "Library Feature : Video Solutions of FAANG Coding Rounds",
    "Individual Doubt Support for DSA : TA",
    "2 Certificates of Completion",
    "Duration - 8.5 months",
    "Start Date - 15th February, 2024",
  ];

  let cards = [
    {
      topHeading: "NEW DELTA BATCH",
      topHeadingIcon: "Δ",
      secondHeading: "Complete Website Development",
      buttonName: "Explore more",
      values: values1
    },
    {
      topHeading: "NEW SIGMA BATCH",
      topHeadingIcon: " 𝚺",
      secondHeading: "Complete Web Development + DSA",
      buttonName: "Enroll now",
      values: values2
    },
  ];

  return (
    <div className="CoursePage w-[100] pb-[100px] relative border bg-[#F8F8FD] px-[50px]">
      <div className="w-full py-[3rem] text-center">
        <h4 className="CourseHeading text-[#6674CC] font-bold text-[1.5vw]">
          MERN STACK WEB DEVELOPMENT + DATA STRUCTURES & ALGORITHMS
        </h4>
        <h3 className="text-[2.3vw]">
          Delta 4.0 v/s <span className="font-semibold">Sigma Batch 2.0</span>
        </h3>
      </div>
      <div className="Batches flex justify-center gap-[2rem]">
        {cards.map((item, index) => (
          <div className={`batch  border-[1px] border-[#ababab] rounded-lg py-[1.2rem] px-[1rem] w-[29.27vw] ${index == 1 ? 'bg-[#FFFFFF]': 'bg-[#F8F8FD]'}`} key={index}>
            <h1 className="batchHeading font-bold text-[1.5vw]">
              {item.topHeading} <span className="text-[#6674CC]">{item.topHeadingIcon}</span>
            </h1>
            <h3 className="mt-[20px] text-[1.3rem]">
              {item.secondHeading}
            </h3>
            <div className="Topices mt-[15px]">
              {item.values.map((item, index) => (
                <h4
                  className="flex items-center text-[1rem] font-normal mb-[6px] text-[#626262]"
                  key={index}
                >
                  <span className="mr-[10px]">
                    <CiCircleCheck className={`font-bold ${item == values2[index] ? 'text-[green]' : 'text-[#6674CC]'}`} />
                  </span>{" "}
                  {item}
                </h4>
              ))}
            </div>
            <button className={`batchButton bottom-[5%] text-white px-[2rem] py-[.6rem] rounded-xl mt-[60px] font-bold ${item.buttonName == 'Enroll now' ? 'bg-[#6674CC]' : 'bg-[black]'}`}>
              {item.buttonName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
