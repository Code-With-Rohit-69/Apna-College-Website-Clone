import React from "react";
import '../Responsive/responsive.css';

function Companies() {

  let images = []
  for (let i = 1; i <= 18; i++) {
     images.push(`./src/assets/Company/image${i}.png`)
  }

  return (
    <div className="company w-full bg-[#F8F8FD] py-[4.5rem] px-[4rem]">
      <div className="text-center mb-[3rem]">
        <h1 className="companiesHeading text-[2rem]">
          Thousands of our students achieved their{" "}
          <span className="text-[#6674CC] font-bold">dream job at</span>
        </h1>
      </div>
      <div className="companies">
        <div className="companyLogo flex flex-wrap">
          {images.map((item, index) => (
            <div className="logo w-[7.5rem] mx-[2rem] mb-[2rem]" key={index}>
              <img src={item} alt="" className="w-full" />
            </div>
          ))}
        </div>
        <div className="text-center">
            <h1 className="text-[1.4rem] text-[#79797B]">+ many more</h1>
        </div>
      </div>
    </div>
  );
}

export default Companies;
