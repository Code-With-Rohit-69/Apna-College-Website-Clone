import React from "react";
import '../Responsive/responsive.css';
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  let footerSections = [
    {
      title: "Helpful Links",
      items: [
        { text: "Courses", url: "#" },
        { text: "Privacy policy", url: "#" },
        { text: "REFUND & CANCELLATION POLICY", url: "#" },
        { text: "TERMS & CONDITIONS", url: "#" },
      ],
      className: "links",
      renderItem: (item, index) => (
        <li
          className={`flex items-${index === 2 ? "start" : "center"}`}
          key={index}
        >
          <span>
            <IoIosArrowForward
              style={{ fontSize: "1.1rem" }}
              className={`text-[#6674CC] font-bold mr-[1rem] ${
                index === 2 ? "mt-[5px]" : ""
              }`}
            />
          </span>
          <a href={item.url} className="text-[1.1rem]">
            {item.text}
          </a>
        </li>
      ),
    },
    {
      title: "Get in touch",
      items: [
        "alpha@apnacollege.in",
        "delta@apnacollege.in",
        "sigma@apnacollege.in",
        "Support Team : 10am-6pm",
      ],
      className: "Emails",
      renderItem: (item, index) => (
        <li
          className={`flex items-${index === 3 ? "start" : "center"}`}
          key={index}
        >
          <span className="mt-[5px]">
            {index === 3 ? (
              <FaUserGear
                style={{ fontSize: "1.4rem" }}
                className="text-[#251D7F] font-bold mr-[1rem]"
              />
            ) : (
              <MdEmail
                style={{ fontSize: "1.4rem" }}
                className="text-[#251D7F] font-bold mr-[1rem]"
              />
            )}
          </span>
          <a href="#" className="email text-[1.2rem]">
            {item}
          </a>
        </li>
      ),
    },
    {
      title: "Connect With Us",
      items: [
        {
          media: "Facebook",
          url: "",
          icon: <FaFacebookSquare />,
        },
        {
          media: "Twitter",
          url: "",
          icon: <FaSquareTwitter />,
        },
        {
          media: "YouTube",
          url: "",
          icon: <FaYoutube />,
        },
        {
          media: "Instagram",
          url: "",
          icon: <IoLogoInstagram />,
        },
        {
          media: "Linkedin",
          url: "",
          icon: <FaLinkedin />,
        },
      ],
      className: "Contact",
      renderItem: (item, index) => (
        <li className="flex items-center text-[#444444]" key={index}>
          <a href={item.url} className="text-[1.1rem]">
            {item.media}
          </a>
          <span className="ml-[10px] text-[1.3rem]">{item.icon}</span>
        </li>
      ),
    },
  ];

  return (
    <footer className="w-full px-[4rem] py-[5rem] font-sans">
      <div className="footer flex mb-[3rem] gap-y-2">
        <div className="foot px-[1.5rem] min-h-[200px] w-[24%] mr-[1rem]">
          <div className="image w-[6rem] mb-[1.5rem]">
            <img src="./src/assets/logo.png" alt="" className="w-full" />
          </div>
          <p className="font-normal text-[1.2rem]">
            We are India's Most Loved Coding Community. Join us!
          </p>
        </div>

        {footerSections.map((section, index) => (
          <div
            key={index}
            className={`foot${
              index + 1
            } px-[1.5rem] h-[200px] mr-[1rem]`}
          >
            <div className={section.className}>
              <h1 className="uppercase font-semibold text-[1.1rem] mb-[1.5rem]">
                {section.title}
              </h1>
              <ul>{section.items.map(section.renderItem)}</ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h1 className="text-[1.1rem] text-[#323232]">Copyright © 2024</h1>
      </div>
    </footer>
  );
}

export default Footer;
