import React from "react";
import "./App.scss";
import { Header } from "./modules/shared/Header";
import { Footer } from "./modules/shared/Footer";
import { HomePage } from "./modules/HomePage";

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
};
