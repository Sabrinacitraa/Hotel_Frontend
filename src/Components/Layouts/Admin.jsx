import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProtectRoutes from "../utils/ProtectRoutes";
import Header from "../../Components/Admin/Header";
import Sidebar from "../../Components/Admin/Sidebar";

export default function AdminLayout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Outlet />
    </>
  );
}
