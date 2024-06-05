import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Media.css";

function ResponsiveNavbar({
  closeNavbar,
  showSideBar,
  toggleLogin,
  toggleSignUp,
}) {
  let styles = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "9",
  };
  let linkStyles = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };
  let anchorStyle = {
    color: "#6B7FCE",
    fontWeight: "500",
    fontSize: "24px",
    margin: "5px 0",
  };
  let crossIconStyle = {
    position: "absolute",
    top: "2%",
    right: "5%",
  };

  let anchorData = [
    {
      name: "New Sigma 2.0",
      link: "#",
    },
    {
      name: "Home",
      link: "#",
    },
    {
      name: "New Courses",
      link: "#",
    },
    {
      name: "Log in",
      link: "#",
    },
    {
      name: "Sign up",
      link: "#",
    },
  ];
  return (
    <div style={styles} className={`${showSideBar ? "flex" : "hidden"}`}>
      <div className="crossIcon" style={crossIconStyle}>
        <RxCross2
          className="text-[3rem] cursor-pointer text-[grey]"
          onClick={closeNavbar}
        />
      </div>
      <div className="links" style={linkStyles}>
        {anchorData.map((item, index) => (
          <a href={item.link} style={anchorStyle} onClick={() => {
            closeNavbar()
            index === 3 ? toggleLogin() : index === 4 ? toggleSignUp() : null
          }} key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
