import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ProductForm() {
  // const [title, setTitle] = useState("Título inicial");
  const [formTitle, setFormTitle] = useState("Título inicial do formulário");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { titulo, descricao, preco } = e.target;
    // console.log("O título é: ", title);
    alert(
      "Valores enviados: " +
        titulo.value +
        " " +
        descricao.value +
        " " +
        preco.value
    );
  };

  // useEffect(() => {
  //   alert("O nome do formulário foi alterado");
  // }, [formTitle]);

  // useEffect(() => {
  //   console.log(
  //     "useEffect sem parametro, roda cada vez que a página renderiza"
  //   );
  // });

  // useEffect(() => {
  //   console.log(
  //     "useEffect com parametro vazio, roda uma vez, quando a página é carregada (no strict mode roda 2 vezes)"
  //   );
  // }, []);

  return (
    <div className={styles.container}>
      <p>{formTitle}</p>
      <form onSubmit={handleSubmit} className={styles.formCadastro}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descrição"
        />
        <input type="number" id="preco" name="preco" placeholder="Preço" />
        <input
          type="file"
          id="imagem"
          name="imagem"
          placeholder="Selecione um arquivo"
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* <button onClick={() => setFormTitle(title)}>
        Mude o nome do formulário
      </button> */}
    </div>
  );
}
