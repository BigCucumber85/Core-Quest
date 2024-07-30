import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoreProvider } from "./context/ContextProvider";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import BountySubmissionForm from "./components/builderIO.jsx/BountySubmission/BountySubmissionForm";
import SelectionComponent from "./components/Selection_Bounty_popup1";
import BountyForm from "./components/CreateBountyPopup";
import HelpBuilder from "./pages/HelpBuilder";
import HelpBuilderPostCard from "./components/HelpBuilderPostCard";
import ViewProject from "./components/builderIO.jsx/BountySubmission/ViewProject";
import Grants from "./pages/Grants";
import AuthInit from "./components/Login/AuthInit";
import Reg1 from "./components/Login/Register/Reg1";
import Reg2 from "./components/Login/Register/Reg2";
import SkillSelector from "./components/builderIO.jsx/BountySubmission/random";
import Reg3 from "./components/Login/Register/Reg3";
import Reg4 from "./components/Login/Register/Reg4";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <CoreProvider>
            <Routes>
              <Route path="/" element={<Home /*state = {state}*/ />} />
              <Route
                path="/postview"
                element={<PostDetail  /*state = {state}*/ />}
              />
              <Route
                path="/bountypop"
                element={<HelpBuilderPostCard /*state = {state}*/ />}
              />
              <Route
                path="/builder"
                element={<HelpBuilder /*state = {state}*/ />}
              />
              <Route
                path="/viewbuilder"
                element={<ViewProject /*state = {state}*/ />}
              />
              <Route path="/grants" element={<Grants /*state = {state}*/ />} />
              <Route path="/reg1" element={<Reg1 /*state = {state}*/ />} />
              <Route path="/reg2" element={<Reg2 /*state = {state}*/ />} />
              <Route path="/reg3" element={<Reg3 /*state = {state}*/ />} />
              <Route path="/reg4" element={<Reg4 /*state = {state}*/ />} />
              <Route
                path="/rr"
                element={<SkillSelector /*state = {state}*/ />}
              />
            </Routes>
            {/* {<RegisterPage/>}  */}
          </CoreProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
