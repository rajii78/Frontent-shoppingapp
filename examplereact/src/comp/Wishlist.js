import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistData(wishlist);
  }, []);

  const removeFromWishlist = (item) => {
    const updated = wishlistData.filter((w) => w.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlistData(updated);
  };

  return (
    <section className="py-4" style={{background:"#969393"}}>
        <i
            className="bi bi-arrow-left"
            style={{marginLeft:"7.5rem"}}
            id="link"
            role="button"
            onClick={() => navigate("/")}
          />
      <div className="container text-center" >
        <h2>My Wishlist ❤️</h2>
        {wishlistData.length === 0 ? (
          <p>No items in wishlist+</p>
        ) : (
          <div className="row row-cols-5 g-4 mt-3 ">
            {wishlistData.map((item) => (
              <div key={item.id} className="col ">
                <div className="card flex-fill text-center">

                  <div
                    className="bi bi-heart-fill text-danger ms-auto me-2 mt-2"
                    role="button"
                    style={{ fontSize: "20px" }}
                    onClick={() => removeFromWishlist(item)}
                  ></div>

                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
