import React from "react";
import '../Responsive/responsive.css';

function AboutShardha() {
  let info = [
    {
      Image: "./src/assets/logo.png",
      about: "Co-founder, Apna College",
    },
    {
      Image: "./src/assets/microsoft.svg",
      about: "Ex-Microsoft, Software Engineer",
    },
    {
      Image: "./src/assets/Google.svg",
      about: "Google SPS, India ",
    },
  ];
  return (
    <div className="shardhaPage bg-[#F8F8FD] w-full px-[4rem] py-[2rem] font-sans">
      <div className="flex justify-center flex-col items-center">
        <div className="w-[16vw] h-[16vw]">
          <img
            src="./src/assets/Shardha.jpeg"
            alt=""
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
        </div>
        <div className="mt-[1rem] text-center">
          <h4 className="uppercase text-[#6674CC] font-bold text-[1rem]">
            TAUGHT BY
          </h4>
          <h2 className="font-bold text-[1.3rem]">SHRADHA KHAPRA</h2>
        </div>
      </div>
      <div className="achievements flex justify-between items-center px-[4rem] pt-[2rem]">
        {info.map((item, index) => (
          <div className="achievementDiv flex flex-col justify-center items-center" key={index}>
            <img src={item.Image} alt="" className={`w-[6rem] ${index == 1 || index == 2 ? 'w-[40px]' : ''}`} />
            <p className="text-[1.3rem]">{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutShardha;
