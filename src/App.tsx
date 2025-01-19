import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./modules/shared/Header";
import { Footer } from "./modules/shared/Footer";
import { ContactForm } from "./modules/shared/ContactForm";

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
