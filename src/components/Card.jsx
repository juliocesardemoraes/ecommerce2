function Card({ image, name, buttonDisabled = false, setModal }) {
  return (
    <div className="card">
      <img src={image}></img>
      <h4>{name}</h4>

      {buttonDisabled === true ? (
        <></>
      ) : (
        <button onClick={() => setModal({image, name})}>Adicionar</button>
      )}
    </div>
  );
}

export default Card;
