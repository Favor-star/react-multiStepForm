import React from "react";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
const SelectPlan = () => {
  return (
    <div className="rounded bg-white  text-dark px-16 py-12  h-full flex flex-col justify-between">
      <div className="w-full h-fit">
        <h1 className="md:text-2xl pb-0 h-fit text-marineBlue bg-white">
          Select you plan
        </h1>
        <p className="paragraph md:text-md  bg-white text-coolGray pt-3 h-fit">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex  flex-row bg-white gap-3 h-36 w-full">
        <div className="h-full border w-28 flex flex-col justify-between items-start p-3  rounded border-lightGray focus:border-pastelBlue">
          <img src={arcade} alt="arcade icon" />
          <div className="h-fit  text-sm flex flex-col">
            Arcade<span className="h-fit text-xs text-coolGray">$9/mo</span>
          </div>
        </div>
        <div className="h-full border w-28 flex flex-col justify-between items-start p-3 rounded border-lightGray focus:border-pastelBlue">
          <img src={advanced} alt="advanced icon" />
          <div className="h-fit text-sm flex flex-col">
            Advanced<span className="h-fit text-xs text-coolGray">$9/mo</span>
          </div>
        </div>
        <div className="h-full border w-28 flex flex-col justify-between items-start p-3 rounded border-lightGray focus:border-pastelBlue">
          <img src={pro} alt="pro icon" />
          <div className="h-fit text-sm flex flex-col">
            Pro<span className="h-fit text-xs text-coolGray">$9/mo</span>
          </div>
        </div>
          </div>
          <div className="w-full p-3 "></div>
    </div>
  );
};

export default SelectPlan;
