import React, { useState } from "react";
import styles from "@styles/Navbar.module.css";
import sidebarStyles from "@styles/Sidebar.module.css"
import reactLogo from "@assets/react.svg";
import searchSVG from "@assets/search.svg"
import { Link } from "react-router-dom";
import { NavbarToggler } from "reactstrap";

const Navbar: React.FC<{}> = () => {
  const [searchBarQuery, setQuery] = useState("");

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    console.log("Sidebar is now: " + sidebarCollapsed); //Delete this
    setSidebarCollapsed(!sidebarCollapsed);
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for "${searchBarQuery}"`); //Delete this
  };

  return (
    <nav className={styles.navbar}>

      <nav className={styles.navbarSkew}>
        <a href="/">
          <img src={reactLogo} className={styles.navbarLogo} />
        </a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/DigitalLibrary">Digital Library</Link></li>
          <li><Link to="/Social">Social</Link></li>
        </ul>
        <input type="text" placeholder="Search" value={searchBarQuery} onChange={handleInputChange}/>
        <button className="searchButton" onClick={handleSearch}><img src={searchSVG}/></button>
        <button onClick={toggleSidebar} className="me-2" />

      </nav>

      <nav className={sidebarStyles.sidebar}>
        <nav className={sidebarStyles.sidebarSkew}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/DigitalLibrary">Digital Library</Link></li>
            <li><Link to="/Social">Social</Link></li>
          </ul>
        </nav>
      </nav>
    </nav>
  );
};

export default Navbar;
