import { Outlet } from "react-router-dom";
import Header from "./Header";
import { memo } from "react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default memo(Layout);
