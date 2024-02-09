import { useState } from "react";
import "./switchingtabs.css";
export const SwitchingTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((data, index) => (
          <span key={index} className={`tabItem`}>
            {data}
          </span>
        ))}
      </div>
    </div>
  );
};
