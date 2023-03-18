import React, { useState } from "react";
import styles from "@styles/Navbar.module.css";
import sidebarStyles from "@styles/Sidebar.module.css";
import reactLogo from "@assets/react.svg";
import searchSVG from "@assets/search.svg";
import { Link } from "react-router-dom";
import { NavbarToggler, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC<{}> = () => {
  const [searchBarQuery, setQuery] = useState("");

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    console.log("Sidebar is now: " + sidebarCollapsed); //Delete this
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for "${searchBarQuery}"`); //Delete this
  };

  return (
    <>
      <nav className={styles.navbar}>
        <nav className={styles.topBar}>
          {/* Logo */}
          <a href="/"><img src={reactLogo} className={styles.navbarLogo}/></a>

          {/* Toggle Sidebar Button */}
          <button onClick={toggleSidebar} className={styles.sidebarToggle}>
            <FontAwesomeIcon icon={faBars} className={styles.menuBars}/>
          </button>

          {/* Searchbar and Search Button */}
            <div className={styles.searchBarContainer}>
              <input type="text" className={styles.searchTerm} placeholder="Search" value={searchBarQuery} onChange={handleInputChange}/>
              <button onClick={handleSearch} type="submit" className={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch}/>
              </button>
              {/* <img onClick={handleSearch} src={searchSVG} className={styles.searchSVG}/> */}
            </div>

          {/* Navbar Buttons */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/DigitalLibrary">Digital Library</Link></li>
            <li><Link to="/Social">Social</Link></li>
          </ul>
        </nav>
      </nav>

      <nav className={sidebarStyles.sidebar}>
        <nav className={sidebarStyles.sidebarSkew}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/DigitalLibrary">Digital Library</Link></li>
            <li><Link to="/Social">Social</Link></li>
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
