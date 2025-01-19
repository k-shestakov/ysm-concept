import { ContactForm } from "../shared/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import styles from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  return (
    <div className={styles["contact-page"]}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
