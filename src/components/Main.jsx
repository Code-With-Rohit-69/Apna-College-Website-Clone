import React from "react";
import '../Responsive/responsive.css';

function Main() {
  return (
    <div className="main w-full relative pt-[10rem] px-[3rem] flex min-h-[80vh]">
      <div className="left w-[50%]">
        <h1 className="text-[3.5vw]">
          <b>
            Get <span className="text-[#6674CC]">Placement</span> Ready with
            Shradha Ma'am
          </b>
        </h1>
        <h2 className="text-[#999DA3] font-medium text-[1.75vw] mt-[1rem]">
          Learn Web Development(MERN) + Data Structures & Algorithms(Java)
        </h2>
        <button className="bg-[#6674CC] text-white px-[20px] py-[13px] font-semibold rounded-lg mt-[2rem] text-[1.8vw]">
          Join New Sigma 2.0
        </button>
      </div>
      <div className="right w-[50%] pr-[20px]">
          <img
            src="./src/assets/laptop-black-realistic.png"
            alt=""
            className="w-[100%]"
          />
          {/* <video src="" className="w-[78%] h-[54%] absolute left-[11%] top-[4%]"></video> */}
      </div>
    </div>
  );
}

export default Main;
