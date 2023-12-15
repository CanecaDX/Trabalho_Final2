import styles from "./styles.module.css";
export default function Card({ titulo, preco }) {
  return (
    <div className={styles.container}>
      <p>{titulo}</p>
      <img
        className={styles.cardImg}
        src="https://img.freepik.com/vetores-premium/padrao-sem-emenda_1159-5086.jpg"
      />
      <span>{preco}</span>
      <button type="button">Ver mais</button>
    </div>
  );
}
