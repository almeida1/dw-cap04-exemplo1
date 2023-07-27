import "./styles.css";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Catalogo from "./Catalogo";
import imagem from "./produto1.jpg";
export default function App() {
  var titulo = "Catalogo";
  class Produto {
    constructor(id, descricao, categoria, custo, quant) {
      this.id = id;
      this.descricao = descricao;
      this.categoria = categoria;
      this.custo = custo;
      this.quant = quant;
      this.imagem = imagem;
    }
  }
  var p1 = new Produto(1, "eletrobomba", "maquina de lavar", 50, 22);
  var p2 = new Produto(2, "eletrobomba", "maquina de lavar", 50, 22);
  var p3 = new Produto(3, "eletrobomba", "maquina de lavar", 50, 22);

  var produtos = [p1, p2, p3];
  return (
    <div className="App">
      <Header titulo={titulo} />
      <Menu />
      <Catalogo produtos={produtos} />
    </div>
  );
}
