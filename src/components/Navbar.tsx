import React, { useState } from "react";
import reactLogo from "@assets/react.svg";
import "@styles/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbar: React.FC = ({}) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for "${searchQuery}"`); //Delete this
  };

  return (

    <div className="Navbar__Container">
      {/* Logo Section -- LEFT */}
      <a href="/" className={"Navbar__Logo"}><img src={reactLogo}/></a>

      {/* Search Section -- MIDDLE */}
      <input type="text" className={"Navbar__Search"} placeholder="Search" value={searchQuery} onChange={handleInputChange}/>
      <button onClick={handleSearch} type="submit" className={"Navbar__Search__Button"}>
        <FontAwesomeIcon className="Navbar__Search__Icon" icon={faSearch}/>
      </button>

      {/* Account Section -- RIGHT */}
      <div className={"Navbar__Acount"}>
        <a href="/" className={"Navbar__Account__Icon"}><img src={reactLogo}/></a>
      </div>

        {/* <div className="Navbar__Links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/DigitalLibrary">Digital Library</Link></li>
            <li><Link to="/Social">Social</Link></li>
          </ul>
        </div> */}
    </div>

  );
};

export default Navbar;
