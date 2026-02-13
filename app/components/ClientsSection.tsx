import Counter from './Counter'
import styles from "./Clients.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.clients}>
      <Counter value={2000} label="Satisfied clients" />
      <Counter value={10} label="Years of experience" />
      <Counter value={40} label="Ski Instructors" />
    </section>
  );
}
