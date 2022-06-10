import * as React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default () => {
  return (
    <div className="page-container">
      <PageHeader />
      <main className="main">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};
