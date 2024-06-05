import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Courses from "./components/Courses";
import Banner from "./components/Banner";
import Curriculum from "./components/Curriculum";
import Companies from "./components/Companies";
import BatchOverview from "./components/BatchOverview";
import LibraryPage from "./components/LibraryPage";
import AboutShardha from "./components/AboutShardha";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  function toogleLogin() {
    setShowLogin(!showLogin);
    setShowSignUp(false);
  }

  function toogleSignUp() {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
  }

  return (
    <>
      {showLogin && <Login hideLogin={toogleLogin} />}
      {showSignUp && <SignUp hideLogin={toogleSignUp} />}
      <Navbar toggleLogin={toogleLogin} toggleSignUp={toogleSignUp} />
      <ResponsiveNavbar />
      <Main />
      <Courses />
      <Banner />
      <Curriculum />
      <Companies />
      <BatchOverview />
      <LibraryPage />
      <AboutShardha />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
