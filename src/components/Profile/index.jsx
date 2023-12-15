import styles from "./styles.module.css";

export default function Profile({ legenda, imgUrl }) {
  return (
    <div className={styles.container}>
      <img className={styles.imagem} src={imgUrl} />
      <h6>{legenda}</h6>
    </div>
  );
}
