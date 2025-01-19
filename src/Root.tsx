import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./modules/HomePage";
import { NotFoundPage } from "./modules/NotFoundPage";
import { ProjectsPage } from "./modules/ProjectsPage";
import { AboutPage } from "./modules/AboutPage";
import { ContactsPage } from "./modules/ContactsPage";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />}>
          <Route path=":projectId" element={<p>poject</p>} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export const Root = () => {
  return (
    <Router>
      <ScrollToTop />
    </Router>
  );
};
