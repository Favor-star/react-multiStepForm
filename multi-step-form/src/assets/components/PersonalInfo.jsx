import React from "react";


const PersonalInfo = () => {
  return (
    <div className="rounded grid bg-white  text-dark px-16 py-12  h-full">
      <div className="w-full  h-fit">
        <h1 className="md:text-2xl bg-white text-marineBlue">Personal Info</h1>
        <p className="paragraph md:text-md bg-white text-coolGray">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <div className="form  bg-white h-fit  ">
        <div className=" h-fit flex flex-col my-4 bg-white text-marineBlue ">
          <label
            className="bg-white flex justify-between align-baseline items-baseline"
            htmlFor="name"
          >
            Name
            <span className="text-strawberryRed text-xs  bg-white" hidden>
              This field is required
            </span>
          </label>
          <input
            className="py-2  border font-medium bg-white rounded-lg px-3 text-marineBlue  focus:outline  focus: outline-purplishBlue"
            type="text"
            id="name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col my-4 bg-white text-marineBlue  h-fit ">
          <label
            className="bg-white flex justify-between align-baseline items-baseline  "
            htmlFor="email "
          >
            Email address{" "}
            <span className="text-strawberryRed text-xs  bg-white" hidden>
              This field is required
            </span>
          </label>
          <input
            className="py-2 my-1 border font-medium  rounded-lg px-3 bg-white focus:outline  focus: outline-purplishBlue"
            type="email"
            id="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="flex flex-col bg-white my-4 text-marineBlue h-fit ">
          <label
            className="bg-white flex justify-between align-baseline items-baseline "
            htmlFor="phone"
          >
            Phone Number{" "}
            <span className="text-strawberryRed text-xs  bg-white" hidden>
              This field is required
            </span>
          </label>
          <input
            className="py-2 font-medium my-1 border rounded-lg px-3 bg-white focus:outline text-marineBlue  focus: outline-purplishBlue focus:bg-white"
            type="tel"
            id="phone"
            placeholder="e.g: +1 234 567 890"
          />{" "}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex align-end justify-end bg-white h-fit">
        <button className="bg-marineBlue text-white  py-2 px-4 rounded-lg hover:opacity-90">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
