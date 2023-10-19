import { useState } from "react";
import "./App.css";
import desktopSidebar from "./assets/images/bg-sidebar-desktop.svg";
import PersonalInfo from "./assets/components/PersonalInfo";
import Steps from "./assets/components/Steps";

function App() {
  return (
    <>
      <div className=" grid h-20rem mx-auto">
        <div
          style={{ height: "590px" }}
          className="w-fit h-fit my-auto  bg-white mx-auto flex p-2.5 border rounded-xl shadow-lg"
        >
          <div className="w-fit  rounded-lg relative">
            <img
              className="object-cover"
              src={desktopSidebar}
              alt="Desktop background"
            />
            <Steps />
          </div>
          <PersonalInfo />
        </div>
      </div>
    </>
  );
}

export default App;