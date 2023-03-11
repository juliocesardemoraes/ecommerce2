import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        {modal.image != undefined ? (
          <Modal item={modal} setModal={setModal}></Modal>
        ) : (
          <div className="grid">
            <Card
              image="./Burguer.png"
              name="X-Burguer"
              setModal={setModal}
            ></Card>
            <Card image="./acai.png" name="Acai" setModal={setModal}></Card>
            <Card image="./Frango.png" name="Frango" setModal={setModal}></Card>
            <Card image="./Pastel.png" name="Pastel" setModal={setModal}></Card>
            <Card image="./Pizza.png" name="Pizza" setModal={setModal}></Card>
            <Card
              image="./Biscoitos.png"
              name="Biscoitos"
              setModal={setModal}
            ></Card>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
