import styles from "../index.module.css";

export default function UpdateButton({ name, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
}
