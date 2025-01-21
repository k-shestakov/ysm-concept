import { Form } from "../shared/Form";
import { ProjectsList } from "../shared/ProjectsList";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { Services } from "./components/Services";
import projectsFromServer from "../../api/projects.json";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsList projects={projectsFromServer.slice(0, 6)} />
      <Services />
      <Overview />
      <Form />
    </>
  );
};
