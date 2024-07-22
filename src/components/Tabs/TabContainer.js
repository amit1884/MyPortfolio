import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import "./tab.scss";
import GlassCard from "../GlassCard/GlassCard";
function TabContainer({ tabs, onTabChange, activeTab, children }) {
  return (
    <GlassCard customClass="tab-container">
      <TabHeader
        tabs={tabs}
        activeTab={activeTab?.tab}
        onTabChange={onTabChange}
      />
      <TabContent>{children}</TabContent>
    </GlassCard>
  );
}

export default TabContainer;
