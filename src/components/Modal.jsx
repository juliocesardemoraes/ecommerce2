import Card from "./Card";

function Modal({ item, setModal }) {
  return (
    <div className="modal">
      <div className="column1">
        <Card
          image={item.image}
          name="Frango Frito"
          buttonDisabled={true}
        ></Card>
        <p>Descrição</p>
      </div>
      <div className="column2">
        <h4 className="title">Minha Sacola</h4>
        <h3>{item.name}</h3>
        <hr></hr>
        <span className="price">R$ 50,00</span>
        <button
          className="button__primary"
          onClick={() => {
            setModal(false);
          }}
        >
          Continuar comprando
        </button>
        <button className="button__secundary">Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Modal;
