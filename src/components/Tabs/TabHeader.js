import React from "react";

function TabHeader({ tabs, onTabChange,activeTab }) {
  return (
    <div className="tab-header">
      {tabs?.map((tab, index) => {
        console.log(activeTab)
        return (
          <div
            className={`tab ${activeTab===tab?.tab?' active-tab':''}`}
            onClick={() => onTabChange(tab)}
            key={index}
          >
            {tab?.tab}
          </div>
        );
      })}
    </div>
  );
}

export default TabHeader;
