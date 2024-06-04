import { info } from "autoprefixer";
import React, { useState } from "react";
import '../Responsive/responsive.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Questions() {
  let questionAnswer = [
    {
      heading: "BATCH RELATED DOUBTS",
      problems: [
        {
          question: "What is Sigma?",
          answer:
            "Sigma is the combination of Web Development & DSA batches. You'll first learn Development for 4.5 months & then DSA  for the next 4.5 months.",
        },
        {
          question:
            "Will I get access to all Alpha Plus & Delta batch features?",
          answer:
            "Yes, you will get access to all the features of Alpha Plus & Delta batch in Sigma. ",
        },
        {
          question:
            "I don't know anything about Coding, is this batch good for me?",
          answer:
            "Yes, this batch will cover all important concepts from basic till advanced. So, there is no need to know anything about coding beforehand.",
        },
        {
          question: "Can I enrol as a working professional?",
          answer:
            "Yes, the batch is curated to help you become a web developer with alternate day schedule, you'll be able to manage with the pace even as a working professional. ",
        },
        {
          question:
            "Do I need to be a Computer Science student to take up this course?",
          answer:
            "Anyone, from any background or field of study, can take up this batch and learn Full Stack Web Development along with DSA.",
        },
        {
          question:
            "I just completed 12th and I want to start learning coding, can I take it?",
          answer:
            "Yes, you are eligible to enrol as we will cover everything from basics to advanced. It is always better to start as early as possible. It will give you a good head start and ample time to get practical experience. ",
        },
        {
          question: "Can I do this batch with my college classes?",
          answer:
            "Yes, it is a self-paced batch and can be done along with college classes.",
        },
        {
          question: "Is the batch in Hindi or English?",
          answer:
            "The batch is taught in Hinglish (a mix of Hindi & English).  ",
        },
        {
          question: "Where will I get the lectures?",
          answer:
            'You will get lectures on the Apna College Website. Log in to the website, then go to "My Batch" & access your batch lectures.',
        },
        {
          question: "What is the batch duration?",
          answer:
            "As this is a combo of 2 batches, The Development batch duration is almost 4.5 months & DSA batch duration is almost 4 months. Total duration will be around 8.5 months.",
        },
        {
          question: "How long is the batch access?",
          answer: "The batch will be accessible for the duration of two years.",
        },
        {
          question: "Will there be a Certificate of completion?",
          answer:
            "Yes, you will get 2 certificates of completion. One for DSA batch & one for Web Development batch.",
        },
        {
          question: "Is there a batch schedule? ",
          answer:
            "Yes, each lesson will be unlocked on alternative days so that you have ample time to learn core concepts & get hands-on experience.",
        },
        {
          question: "Will there be projects in the batch?",
          answer:
            "Yes, the course will have many minor & major projects that will help to strengthen your concepts and you can mention in your resume/portfolio. ",
        },
        {
          question: "Is there a group/community I can join after enrolling?",
          answer:
            "Yes, an exclusive community will be there for all enrolled students.",
        },
        {
          question: "Will there be LIVE classes?",
          answer: `Development Batch will be in recorded format with LIVE mentorship sessions on important topics.
                DSA Batch is a LIVE + VOD Batch. Live is for alternate day Live classes of DSA instructors. VOD is Video on Demand, you will get video lectures of Shradha ma'am on alternate days. It will be a hybrid batch with 3 live classes & 3 lectures each week. There will be an additional live doubt session at the week's end.`,
        },
        {
          question: "What are the class timings?",
          answer:
            "All lectures and live sessions will take place in the evening (after 6pm). Schedule for each week will be conveyed in advance.",
        },
        {
          question: "Where will I find my batch after purchase?",
          answer:
            "You will find your batch in the My Batch section. Please note, the lectures will be visible after the batch starts on 15th February, 2024.",
        },
        {
          question:
            "I paid but still did not receive any welcome email/unable to access my course. What to do?",
          answer: `First of all, don't worry as our team is available to help you.
                In most of the cases this is because you filled a different email address or wrongly typed your email address while payment. In such a case please send us an email at sigma@apnacollege.in with the subject "ENROLMENT ISSUE SIGMA FEB24" along with your full name, phone number, payment id from Razorpay and a screenshot of your payment. `,
        },
        {
          question: "Library Feature will be for how many companies?",
          answer: `Currently Library feature is available for the following companies : Google, Microsoft, Amazon, Atlassian, Adobe and Goldman Sachs.
                More companies will be added with time.`,
        },
      ],
    },
    {
      heading: "GENERAL DOUBTS",
      problems: [
        {
          question: "What are Data Structures and Algorithms(DSA)?",
          answer:
            "These are tools & techniques that will help us write good code.A data structures is a named location that can be used to store and organize data.An algorithm is a collection of steps to solve a particular problem.",
        },
        {
          question: "What is Web Development?",
          answer:
            "It is the process of building websites for the internet. We use many websites like Amazon, Flipkart, Netflix & many more. We will learn the process of designing, building & deploying such websites on the internet.",
        },
        {
          question: "What is MERN Stack in Development?",
          answer:
            "MERN stands for MongoDB, Express, React & Node. These are the 4 key technologies that will be covered in the batch. MERN is the most popular stack for web development & choice for today’s web developers.",
        },
        {
          question: "Why should I learn Data Structures and Algorithms(DSA)?",
          answer:
            "Data Structures and Algorithms are frequently asked in Job interviews of many companies like Microsoft, Google, Amazon, Atlassian & many many more.It also help you to write optimized and scalable code.You will also learn to write code that runs faster and requires less storage.",
        },
        {
          question: "Why should I learn Web Development?",
          answer: (
            <ul className="list-disc ml-[2rem]">
              <li>
                Almost all tech companies do some kind of development, thus
                becoming a SKILLED Full Stack Web Developer opens up a lot of
                jobs for you.
              </li>
              <li>
                You will built projects that will give you a practical coding &
                development experience. These projects will be useful when you
                apply for internships & placements.{" "}
              </li>
              <li>
                Even if you apply for Software Engineering roles, development
                experience will give you an edge in the selection process.
              </li>
              <li>
                You can also use your development skills to do freelancing,
                contribute to open source or work on building your own tech
                startup.
              </li>
            </ul>
          ),
        },
      ],
    }
  ];

  const [show, setShow] = useState(Array(questionAnswer.length).fill(false));

  function handleClick(index) {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  }

  return (
    <div className="problemQuestionsPage w-full bg-[#F8F8FD] px-[4rem] py-[5rem] font-sans">
      <div className="heading text-center mb-[2rem]">
        <h1 className="uppercase font-bold text-[2rem]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div>
        {questionAnswer.map((name, nameIndex) => (
          <div key={nameIndex}>
            <h3 className="font-bold text-center mb-[1.5rem]">
              {name.heading}
            </h3>
            <div className="questions mb-[2.5rem]">
              {name.problems.map((item, index) => (
                <div
                  className="question bg-white px-[2rem] py-[2.5rem] border-b-[.1px] border-[#dbdbdb]"
                  key={index}
                >
                  <div
                    className="outer flex justify-between cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h2 className="questionHeading font-semibold text-[1.3rem] tracking-[.2px]">
                      {item.question}
                    </h2>
                    {show[index] ? (
                      <IoIosArrowUp className="arrows text-[1.5rem]" />
                    ) : (
                      <IoIosArrowDown className="arrows text-[1.5rem]" />
                    )}
                  </div>
                  <div
                    className={`inner mt-[1rem] ${show[index] ? "" : "hidden"}`}
                  >
                    <p className="text-[1.2rem] font-normal text-[#4d4d4d]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
