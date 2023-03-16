import React from "react";
import { Link } from "react-router-dom";
import styles from "@styles/Sidebar.module.css";

const Sidebar: React.FC = ({}) => {
  return (
    <nav className={styles["sidebar-container"]}>
      <nav className={styles["skew-menu"]}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/DigitalLibrary">Digital Library</Link>
          </li>
          <li>
            <Link to="/Social">Social</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Sidebar;
