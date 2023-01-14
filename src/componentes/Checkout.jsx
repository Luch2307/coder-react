import React, { useContext, useState } from "react";
import  { CartContext } from "./CartContext";


const Checkout = () => {
  const {cartProducts} = useContext(CartContext)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [numero, setNumero] = useState("")
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <form>
            <div class="mb-3">
              <label for="Nombre" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="ingrese su nombre"
                id="Nombre"
                onInput={(e) => {setNombre(e.target.value)}}
              />
            </div>{" "}
            <div class="mb-3">
              <label for="Nombre" class="form-label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="ingrese su nombre"
                id="Email"
                onInput={(e) => {setEmail(e.target.value)}}
                />
              />
            </div> <div class="mb-3">
              <label for="Nombre" class="form-label">
                telefono
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="ingrese su numero"
                id="telefono"
                onInput={(e) => {setNumero(e.target.value)}}
                />
              />
            </div>
            <button  type="button"
                className="btn btn-outline-primary mt-2 ">
              Generar Orden
            </button>
          </form>
        </div>
        <div className="col">
          <table className="table">
            <tbody >
                {cartProducts.map(item => (
                    <tr key={item.id}>
                        <td> <img src={item.imagen} alt={item.nombre} width={64}/></td>
                        <td className="align-middle">{item.nombre}</td>
                        <td className="text-center align-middle">{item.qty}</td>
                        <td className="text-center align-middle">${item.qty * item.precio}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
