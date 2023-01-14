import { Link } from "react-router-dom";
import ButtonCounter from "./ButtonCounter";



const Item = ({item}) => {
  return (
    <div className="card">
        <Link to={`/item/${item.id}`} className="text-decoration-none">
        <img src={item.imagen} className="card-img-top"  alt={item.nombre} />
    </Link>
        <div className="card-body w-100 d-flex align-item -center justify-content-between">
          <div>
            <p className="card-text text-primary">{item.nombre}</p>
            <span className="card-price text-primary">${item.precio}</span>
          </div>
          <ButtonCounter stockItem={item.stock} item={item}/>
        </div>
      </div>
  );
};

export default Item;
