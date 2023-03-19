
import React from "react";

import MainLayout from "../layout/MainLayout";

import "@styles/Homepage.css";

function HomePage() {
  return (
    <MainLayout>
      <div className="mainDiv">
        <div className="headers">
          <h1>Home page</h1>
          <h1>Welcome to My Site!</h1>
          <button>Search</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
