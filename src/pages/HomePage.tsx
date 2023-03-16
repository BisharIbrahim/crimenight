import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { useState } from "react";
import { Card, Container, CardBody, CardFooter, CardHeader } from "reactstrap";
import MainLayout from "../layout/MainLayout";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MainLayout>
      <div>Home page</div>
      <h1>Welcome to My Site!</h1>
      <button>Search</button>
    </MainLayout>
  );
}

export default HomePage;
