import TodolistPage from "@/app/components/todolist/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <TodolistPage />
    </div>
  );
}
