import { Form } from "../shared/Form";
import { ProjectsList } from "../shared/ProjectsList";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { Services } from "./components/Services";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsList projects={[1, 2, 3, 4, 5, 6]} />
      <Services />
      <Overview />
      <Form />
    </>
  );
};
