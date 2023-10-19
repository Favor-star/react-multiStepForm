import React from "react";

const Steps = () => {
  return (
    <div className="absolute top-10 start-7 w-8/12 p-2 h-fit flex flex-col items-start  gap-8 bg-clip-text">
      <div className="flex gap-4 items-center justify-center text-sm bg-clip-text">
        <div className="w-8 h-8 rounded-full bg-lightBlue text-center text-black flex flex-row items-center justify-center">
          1
        </div>
        <div className="flex flex-col bg-clip-text">
          <span className="bg-clip-text text-white font-normal opacity-50">
            STEP 1
          </span>
          <span className="bg-clip-text text-white font-normal tracking-wider">
            YOUR INFO
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center text-sm bg-clip-text">
        <div className="w-8 h-8 rounded-full bg-clip-text text-center text-white flex flex-row items-center border justify-center">
          2
        </div>
        <div className="flex flex-col bg-clip-text">
          <span className="bg-clip-text text-white font-normal opacity-50">
            STEP 2
          </span>
          <span className="bg-clip-text text-white font-normal tracking-wider">
            SELECT PLAN
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center text-sm bg-clip-text">
        <div className="w-8 h-8 rounded-full bg-clip-text text-center text-white border flex flex-row items-center justify-center">
          3
        </div>
        <div className="flex flex-col bg-clip-text">
          <span className="bg-clip-text text-white font-normal opacity-50">
            STEP 3
          </span>
          <span className="bg-clip-text text-white font-normal tracking-wider">
            ADD-ONS
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center text-sm bg-clip-text">
        <div className="w-8 h-8 rounded-full bg-clip-text text-center text-white border flex flex-row items-center justify-center">
          4
        </div>
        <div className="flex flex-col bg-clip-text">
          <span className="bg-clip-text text-white font-normal opacity-50">
            STEP 4
          </span>
          <span className="bg-clip-text text-white font-normal tracking-wider">
            SUMMARY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
