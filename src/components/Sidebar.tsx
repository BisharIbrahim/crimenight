import React, { useState } from "react";
import reactLogo from "@assets/react.svg";
import "@styles/Sidebar.css";

const Sidebar: React.FC = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      text: "Famous Cases",
      icon: "src/assets/famous.svg",
    },
    {
      text: "Cases by Category",
      icon: "src/assets/category.svg",
    },
    {
      text: "Discussion Forum",
      icon: "src/assets/discussion.svg",
    },
    {
      text: "Gallery",
      icon: "src/assets/gallery.svg",
    },
  ];

  return (
     <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
      <div className="nav-upper">
          <button className={isExpanded? "hamburger hamburger-in" : "hamburger hamburger-out"} 
            onClick={() => setIsExpanded(!isExpanded)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        <div className="nav-menu">
          {menuItems.map(({text, icon}) => (
             <a href="#" className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              <img src={icon} alt=""/>
              {isExpanded && <p>{text}</p>}
              {!isExpanded && <h6 className="quoteTitle">{text}</h6>}
             </a>
          ))}
        </div>
        <div className="mobileView-menu">
          {menuItems.map(({text}) => (
             <a href="#" className={"mobileView-menu-item"}>
               <p>{text}</p>
             </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
