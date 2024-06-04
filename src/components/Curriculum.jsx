import React from "react";
import '../Responsive/responsive.css';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Curriculum() {
  const [display, setDisplay] = useState({});

  function handleClick(index) {
    setDisplay((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  let listItems1 = [
    "What is Web?",
    "Markup with HTML & JSX",
    "Flexbox, Grid & Responsiveness",
    "Bootstrap Layouts & Components",
    "Frontend UI Framework - Tailwind CLI",
    "Core JavaScript & Object Orientation",
    "Async JS - promises, async/await",
    "DOM & Events",
    "Event Bubbling & Delegation",
    "Ajax, Axios & fetch API",
    "Functional React Components",
    "Props & State Management",
    "Dynamic Component Styling",
    "Functions as Props",
    "Hooks in React : useState, useEffect",
    "Material UI",
    "Custom Hooks",
    "Supplement: Redux & Redux Toolkit",
    "Version Control: Git & Github",
  ];

  let listItems2 = [
    "Databases (SQL & No SQL)",
    "Mongo Relationships",
    "Dive deep into Mongo",
    "Express, Nodejs & npm",
    "REST APIs",
    "Routing, cookies & session",
    "Middlewares deep dive",
    "EJS Templating",
    "MVC Architecture",
    "Client & server side Validations",
    "Error Handling & flash-connect",
    "Authorization",
    "Cloudinary & MapBox with Geocoding",
    "Deployment with Render",
    "+ More Topics like AWS, WebRTC in Project based learning (after batch completion)",
  ];

  let listItems3 = [
    "Spotify Player Replica (CSS)",
    "Simon Says Game (JS)",
    "Todo List App (JS)",
    "Real-time Weather App (React & Material UI)",
    "Airbnb (Full Stack Major Project with Deployment)",
    "Zoom Full Stack with Video Conferencing (after batch completion)",
    "+ More Full Stack Projects like Zerodha etc. (after batch completion)",
  ];

  let listItems4 = [
    "Flowcharts & Pseudocode",
    "Variables & Data Types",
    "Operators",
    "Conditional Statements",
    "Loops (Flow Control)",
    "Patterns",
    "Functions & Methods",
    "Strings",
  ];

  let listItems5 = [
    "Sorting Algorithms",
    "Bit Manipulation",
    "Object Orientation (OOPs)",
    "Recursion & Backtracking",
    "Divide & Conquer",
    "ArrayLists",
    "Linked Lists",
    "Stacks & Queues",
    "Binary Trees",
    "Binary Search Trees",
  ];

  let listItems6 = [
    "HashMaps & HashSets",
    "Heaps (Priority Queue)",
    "Tries",
    "Graph",
    "Greedy Algorithms",
    "Dynamic Programming",
    "Segment Trees",
  ];

  let allSubjectsOfWeb = [
    {
      heading: "Full Stack Web Development | MERN Stack",
      subjects: [
        {
          name: "Frontend (HTML,CSS,Javascript, React)",
          listItems: listItems1,
        },
        {
          name: "Backend (NodeJS, MongoDB, SQL)",
          listItems: listItems2,
        },
        {
          name: "Projects",
          listItems: listItems3,
        },
      ],
    },
    {
      heading: "Data Structures and Algorithms",
      subjects: [
        {
          name: "Programming with Java",
          listItems: listItems4,
        },
        {
          name: "Data Structures & Algorithms",
          listItems: listItems5,
        },
        {
          name: "Advanced DSA",
          listItems: listItems6,
        },
      ],
    },
  ];

  return (
    <div className="curriculum w-full bg-white py-[4.5rem] px-[4rem]">
      <div className="heading text-center mb-[2rem]">
        <h1 className="uppercase font-bold text-[1.5rem]">
          SIGMA BATCH CURRICULUM
        </h1>
      </div>
      <div className="subjects">
        {allSubjectsOfWeb.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="subTechnology font-[400] text-[1.2rem] font-sans mt-[2rem]">
              {section.heading}
            </h3>
            {section.subjects.map((items, indexes) => (
              <div className="subject mb-[.5rem]" key={indexes}>
                <div className="parts">
                  <div className="bg-[#F8F8FD] py-[1.6rem] px-[1rem] rounded-2xl">
                    <div
                      className="upper flex justify-between items-center"
                      onClick={() => handleClick(`${sectionIndex}-${indexes}`)}
                    >
                      <h1 className="font-semibold text-[1.2rem]">
                        {items.name}
                      </h1>
                      <IoIosArrowDown
                        className={`ArrowDownIcon text-[1.5rem] ${
                          display[`${sectionIndex}-${indexes}`] ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`inner mt-[1rem]  ${
                        display[`${sectionIndex}-${indexes}`]
                          ? null
                          : "hidden"
                      }`}
                    >
                      <ul>
                        {items.listItems.map((item, index) => (
                          <li
                            className="mb-[.5rem] text-[1.2rem] text-[#414141]"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
