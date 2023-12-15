import { useState } from "react";
import styles from "./styles.module.css";
import api from "@/services/api";

export default function CadastroProduto() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [loja, setLoja] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();
    api.post ("/produtos", {titulo, descricao, preco, foto:"", lojaId: loja})
    .then(res => alert ("Produto salvo!"))
    .catch((err) => {
    alert("Erro ao cadastrar");
    console.log(err);
  });
  }

  return (
    <div className={styles.container}>
      <p>Cadastro de produtos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titulo" placeholder="Título" value={titulo}  onChange={(e) => setTitulo(e.target.value)}/>
        <input type="text" name="descricao" placeholder="Descrição" value={descricao} onChange={(e) => {setDescricao(e.target.value)}} />
        <input type="number" name="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)}/>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}