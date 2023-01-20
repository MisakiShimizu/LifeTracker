import React, { useState } from "react";
import TabSignCard from "./TabSignCard";

const Tabs = ({ setEmail, setPassword }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div>
      <ul className="flex m-2">
        <li
          className={
            activeTab === "tab1" ? "border-b border-slate-700 mr-2" : "mr-2"
          }
        >
          <button onClick={() => setActiveTab("tab1")}>Sign In</button>
        </li>
        <li className={activeTab === "tab2" ? "border-b border-slate-700" : ""}>
          <button onClick={() => setActiveTab("tab2")}>Sign Up</button>
        </li>
      </ul>
      <div className="m-2">
        <TabSignCard
          activeTab={activeTab}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </div>
    </div>
  );
};

export default Tabs;
