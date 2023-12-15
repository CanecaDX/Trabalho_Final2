import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";
import api from "@/services/api";
export default function Gallery() {
  const [produtos, setProdutos] = useState([]);

  function getProdutos() {
    api
      .get("produtos")
      .then((result) => {
        console.log(result.data);
        setProdutos(result.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <section>
      <h1>Listagem de Produtos</h1>
      <div className={styles.imgContainer}>
        {produtos?.length > 0 &&
          produtos.map((produto) => (
            <Card titulo={produto.titulo} preco={produto.preco} />
          ))}
      </div>
    </section>
  );
}
