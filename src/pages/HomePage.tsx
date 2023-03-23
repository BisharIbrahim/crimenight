
import React from "react";

import MainLayout from "../layout/MainLayout";

import "@styles/Homepage.css";

function HomePage() {
  return (
    <MainLayout>
      <div className="mainDiv">
        <div className="headers">
          <div>
            <h2>Featured Videos</h2>
            <span></span>
            <div>
              {/* Insert video list here */}
            </div>
          </div>
          <h1>Welcome to My Site!</h1>
          <button>Search</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
