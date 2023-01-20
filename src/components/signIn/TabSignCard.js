import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";

const TabSignCard = ({ activeTab, setEmail, setPassword }) => {
  return (
    <div>
      {activeTab === "tab1" ? (
        <div>
          <h3 className="my-2">
            please enter your email below to get started...
          </h3>
          <div className="flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-0 bg-soft-pink w-10/12 m-1 h-7 rounded p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className=" border-0 w-1/5">
              <BsArrowReturnLeft className="text-lg" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>returning? sign in below</h3>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              <BsArrowReturnLeft className="arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TabSignCard;
