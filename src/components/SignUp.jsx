import React from "react";
import { ImCross } from "react-icons/im";
import '../Responsive/responsive.css';
import './Login.css'

function SignUp({ hideLogin }) {
  let values = [
    {
      name: "What's your name?",
      placeholder: "Name",
      type: "text",
    },
    {
      name: "What's your e-mail?",
      placeholder: "E-mail",
      type: "email",
    },
    {
        name: 'Your Password?',
        placeholder: 'Password',
        type: 'password'
    },
    {
        name: 'Phone Number',
        placeholder: '98xxxxxxxx',
        type: 'number'
    }
  ];

  return (
    <div className="min-h-[100vh] w-full bg-[#060606f3] flex items-center justify-center text-white login-container overflow-hidden">
      <div className="w-[420px] bg-black p-[2rem] relative">
        <ImCross
          className="absolute right-[3%] top-[3%] text-[#757575] text-[.8rem] cursor-pointer"
          onClick={hideLogin}
        />
        <h1 className="uppercase text-white font-bold text-[1.3rem] text-center leading-[25px] mb-[2rem]">
        SIGN UP TO APNA COLLEGE!
        </h1>
        {values.map((item, index) => (
          <div className={`${item.type} mb-[1.1rem]`} key={index}>
            <h4 className="mb-2">{item.name}</h4>
            <input
              type="text"
              placeholder={item.placeholder}
              className="px-[15px] w-full bg-[#262626] placeholder:text-[#757575] py-[.5rem] border-none outline-none"
            />
          </div>
        ))}
        <button className="bg-[#6674CC] w-full py-[.5rem] font-bold tracking-[.5px]">
          Login
        </button>
        <div className="links flex items-center justify-between mt-[2rem]">
          {["Sign in with your account", "Forget your password"].map((item, index) => (
            <a href="#" className="text-[#6674CC] " key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignUp;


// onClick={
//   
// }