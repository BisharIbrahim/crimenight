import React, { useState } from "react";
import reactLogo from "@assets/react.svg";
import "@styles/Navbar.css"
import "@styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = ({}) => {

  const [searchBarQuery, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for "${searchBarQuery}"`); //Delete this
  };

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
    <>
    <div className="topNav">
      {/* Searchbar and Search Button */}
      <div className={"topNavContainer"}>
        <input type="text" className={"searchTerm"} placeholder="Search" value={searchBarQuery} onChange={handleInputChange}/>
        <button onClick={handleSearch} type="submit" className={"searchButton"}>
          <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
        </button>
      </div>
    </div>
     <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (<div className="nav-brand">
            <img src={reactLogo} alt="nav brand"/>
            <h2>Crime Night</h2>
          </div>
          )}
          <button className={isExpanded? "hamburger hamburger-in" : "hamburger hamburger-out"} 
            onClick={() => setIsExpanded(!isExpanded)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({text, icon}) => (
             <a href="#" className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}>
              <img src={icon} alt=""/>
              {isExpanded && <p>{text}</p>}
              {!isExpanded && <h6 className="quoteTitle">{text}</h6>}
             </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
