import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddToCart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const addtocard = JSON.parse(localStorage.getItem("addtocard")) || [];
    setCartData(addtocard);
  }, []);

  const removeFromCart = (item) => {
    const updated = cartData.filter(p => p.id !== item.id);
    localStorage.setItem("addtocard", JSON.stringify(updated));
    setCartData(updated);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛒 My Cart</h2>

      {cartData.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cartData.map(item => (
            <div key={item.id} className="col">
              <div className="card shadow h-100 text-center">

                <button
                  className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                  onClick={() => removeFromCart(item)}
                >
                  ✕
                </button>

                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "150px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p className="text-muted">₹999</p>

                  <button className="btn btn-success w-100 mb-2">
                    Buy Now
                  </button>

                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
