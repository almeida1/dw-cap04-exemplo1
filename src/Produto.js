function Produto(props) {
  return (
    <div className="produto">
      <img src={props.produto.imagem} alt="Imagem" />
      <p> {props.produto.descricao} </p>
      <p> {props.produto.custo} </p>
      <p> {props.produto.quant} </p>
    </div>
  );
}
export default Produto;
