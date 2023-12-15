import {useRouter} from "next/router";
import styles from "./styles.module.css";
import {useState, useEffect} from "react";
import api from "@/services/api";

export default function Produto() {
  const router = useRouter();
  const [id, setId] = useState(0)
  const [produto, SetProduto] = useState({});

  function getProduto(){
    if(id > 0) {

    api.get("produtos/" + id)
    .then((res) => {SetProduto(res.data);
    })
    .catch((err) => alert(err));
  }
}

  useEffect(() => {
    getProduto();
}, [id]);

  useEffect(()=> {
    const id = Number(router.query.id);
    setId(id);
  }, [router.query.id])
  
 
  return (
    <div className={styles.container}>
      <div>
        <img src="https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2018/12/19110219/LOGO-IFSUL1.jpg" />
      </div>
      <div>
        <span className={styles.titulo}>{produto.titulo}</span>
        <span className={styles.descricao}>{produto.descricao}</span>
        <span className={styles.preco}>{produto.preco}</span>

        <button>Comprar</button>
      </div>
    </div>
  );
}
