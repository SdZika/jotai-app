import React from "react"
import { useState } from "react"

interface Tab {
 label: string;
 content: React.ReactNode
}

interface TabsProp {
    tabs: Tab[]
}

export const Tabs = ({tabs} : TabsProp) => {

  const [ activeTab, setActiveTab] = useState<number>(0)




  return (
    <>
    <div>
          <h1>Tabs</h1>
          {tabs.map((tab, index) => (<button key={index} className={ index === activeTab ? "active" : ""} onClick={() => setActiveTab(index)}>{tab.label}</button>))}
    </div>
    <div>
          {tabs[activeTab].content}
    </div>
    </>
  )
}
